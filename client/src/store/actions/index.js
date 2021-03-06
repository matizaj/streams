import streamsApi from '../../api/streamsApi';
import history from '../../history';

import {SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM ,EDIT_STREAM, DELETE_STREAM} from './types';
export const signIn=(userId)=>{
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut=()=>{
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => async (dispatch, getState)=> {    
    const {userId}=getState().auth;
    const response = await streamsApi.post('/streams', {...formValues, userId});
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });

    history.push('/')
};

export const fetchStream = (id) => async (dispatch)=> {
    const response = await streamsApi.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
};

export const fetchStreams = () => async (dispatch)=> {
    const response = await streamsApi.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
};

export const editStream = (id, update) => async (dispatch, getState)=> {
    const {userId} = getState().auth;
    const response = await streamsApi.patch(`/streams/${id}`, update);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
    history.push('/');
};
export const deleteStream = (id) => async (dispatch)=> {
    const response = await streamsApi.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    });
    history.push('/');
};

 