import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { GetUsers, AddUser } from '../store/action/userActions';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [data, setdata] = useState({
    name: '',
    image: '',
    description: '',
  });

  const Users = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();

  const getUsers = async () => {
    await dispatch(GetUsers());
  };

  const handleCreateUser = async () => {
    if (data.name !== '') {
      await dispatch(AddUser(data));
    } else {
      alert('Please Enter your Name');
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className='container p-5 d-flex flex-column  align-items-center justify-content-center '>
        <div className='form-group col-6'>
          <label for=''>Name</label>
          <input
            type='text'
            className='form-control mt-2'
            name=''
            id=''
            onChange={(e) => {
              setdata({
                ...data,
                name: e.target.value,
              });
            }}
            aria-describedby='emailHelpId'
            placeholder='Enter your name'
          />
        </div>{' '}
        <div className='form-group col-6 mt-3'>
          <label for=''>Description</label>
          <input
            type='text'
            className='form-control mt-2'
            name=''
            onChange={(e) => {
              setdata({
                ...data,
                description: e.target.value,
              });
            }}
            id=''
            aria-describedby='emailHelpId'
            placeholder='Ex - Web Developer'
          />
        </div>
        <button onClick={handleCreateUser} className='btn btn-primary mt-3'>
          Submit
        </button>
      </div>
      <div
        className='container d-flex  align-items-center justify-content-center '
        style={{
          height: '50vh',
        }}
      >
        <div className='container col-8 d-flex align-items-center justify-content-center flex-wrap '>
          {Users.map((user, index) => {
            return <Card item={user} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
