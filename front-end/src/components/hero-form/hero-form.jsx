import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../assets/pure-css/grids.css';
import {useDispatch} from "react-redux";
import addHero from '../../actions/add-hero-action';



import RenderTextField from '../form-components/input';
import RenderDatePicker from '../form-components/date-picker';
import RenderSwitch from '../form-components/switch';

import CollectForm from './collectForm/collectForm';

import './hero-form.css';

const createCollects = (q, removeCollect) =>
  q.map( c => (<CollectForm removeCollect={() => removeCollect(c)} key={`collect_${c}`} name={c} />));

const HeroForm = props => {
  const { pristine, submitting, handleSubmit } = props;
  const dispatch = useDispatch();
  const [collect, setCollect] = useState([1]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onAddCollect = () => {
    const coll = [ ...collect ];
    coll.push(coll[coll.length - 1] + 1);
    setCollect(coll);
  }
  const removeCollect = (i) => {
    let coll = [...collect];
    const ind = coll.findIndex(c => c === i);
    console.log(ind);
    if (ind !== undefined) {
      coll.splice(ind, 1);
    }
    console.log(coll);
    setCollect(coll);
  }

  const collections = createCollects(collect, removeCollect);
  return (
    <form className='hero-form' onSubmit={handleSubmit(data => dispatch(addHero(data)))}>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
                <Field
                  name="hero_name"
                  component={RenderTextField}
                  label="Ім'я"
                />
            </Grid>
            <Grid item item xs={12}>
                <Field
                  name="hero_surname"
                  component={RenderTextField}
                  label="Прізвище"
                />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="dateOfBirth"
                component={RenderDatePicker}
                variant="outlined"
                label="Дата народження"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="diagnosis"
                multiline
                rows="4"
                component={RenderTextField}
                label="Діагноз"
              />
            </Grid>
            <Grid item xs={12}>
                <Field
                  name="description"
                  multiline
                  rows="4"
                  component={RenderTextField}
                  label="Опис / коментар"
                />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <Field
                name="isActive"
                component={RenderSwitch}
                label="Сбір коштів триває"
              />
            </Grid>
            {collections}
            <Grid item xs={12}>
              <Fab color="primary" aria-label="add" onClick={onAddCollect}>
                <AddIcon />
              </Fab> Додати Сбір
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
        />
        </Grid>
        <Grid item xs={12}>
          <div style={{textAlign: 'center', width: '100%'}}>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting}>
              Clear Values
            </button>
          </div>
        </Grid>
      </Grid>
  </form>
    )
}

HeroForm.defaultProps = {
  // onSubmit: values => console.log(values)
};
export default reduxForm({
  form: 'hero'
})(HeroForm)

