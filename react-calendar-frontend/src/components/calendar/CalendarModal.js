import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

if( process.env.NODE_ENV !== 'test' ) {
  Modal.setAppElement('#root');
}

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
  title: '',
  notes: '',
  start: now.toDate(),
  end: nowPlus1.toDate()
};

export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState( now.toDate() )
  const [dateEnd, setDateEnd] = useState( nowPlus1.toDate() )
  
  const dispatch = useDispatch();
  const { modalOpen } = useSelector( state => state.ui );
  const { actionEvent } = useSelector( state => state.calendar );
  const [titleValid, setTitleValid] = useState(true);
  
  const [formValues, setFormValues] = useState( initEvent )

  const { title, notes, start, end } = formValues;

  useEffect(() => {
    if( actionEvent ) {
      setFormValues( actionEvent );
    } else {
      setFormValues( initEvent );
    }
  }, [actionEvent, setFormValues])

  const handleInputChange = ({ target }) =>{
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const closeModal = () => {
    dispatch( uiCloseModal() )
    dispatch( eventClearActiveEvent() )
    setFormValues( initEvent );
  }

  const handleStartDateChange = (e) => {
    setDateStart( e );
    setFormValues({
      ...formValues,
      start: e
    })
  }

  const handleEndDateChange = (e) => {
    setDateEnd( e );
    setFormValues({
      ...formValues,
      end: e
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    const momentStart = moment( start );
    const momentEnd = moment( end );
    
    if( momentStart.isSameOrAfter( momentEnd ) ) {
      return Swal.fire(
        "Error",
        "The End Date must be greater than the start date",
        "error"
      );
    }

    if( title.trim().length < 2) {
      setTitleValid(false);
      return Swal.fire(
        "Error",
        "The title must have more than 2 letters",
        "error"
      );
    }

    if( actionEvent ) {
      dispatch( eventStartUpdate( formValues ) );
    } else {
      dispatch( eventStartAddNew( formValues ) );
    }
    
    setFormValues( initEvent );
    setTitleValid( true );
    closeModal()
  }

  return (
    <div>
      <Modal
        isOpen={ modalOpen }
        //onAfterOpen={ afterOpenModal }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS= { 200 }
        className="modal"
        overlayClassName="modal-fondo"
        ariaHideApp={ !process.env.NODE_ENV === 'test' }
      >
        <h1 className="modalTitle">{ (actionEvent) ?  'Editar evento' : 'Nuevo evento' }</h1>
        <hr />
        <form 
          className="container"
          onSubmit={ handleOnSubmit }
        >
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              onChange={ handleStartDateChange }
              className="form-control"
              maxDate={ dateEnd }
              value={ dateStart }
            />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              onChange={ handleEndDateChange }
              className="form-control"
              minDate={ dateStart }
              value={ dateEnd }
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Título y notas</label>
            <input 
              type="text" 
              className={ `form-control ${ !titleValid  && 'is-invalid' }`}
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={ title }
              onChange={ handleInputChange }
              required={ true }
            />
            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group">
            <textarea 
              type="text" 
              className="form-control"
              placeholder="Notas"
              rows="4"
              name="notes"
              value={ notes }
              onChange={ handleInputChange }
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary btn-block"
          >
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  )
}
