import Initial from './steps/initial';
import React, { useState } from 'react';
import { User } from './dto/user.dto';
import { Business } from './dto/business.dto';

export type BodyRequest = {
  user: User
  business: Business
}

const Register = () => {
  const [completedRegister, setCompletedRegister] = useState<boolean>(false)

  async function onCompletedRegister() {
    setCompletedRegister(true)
  }

  return (
    <React.Fragment>
      <Initial onCompletedRegister={onCompletedRegister} />
    </React.Fragment>
  )
}

export default Register;