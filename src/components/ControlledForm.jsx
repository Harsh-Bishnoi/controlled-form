import React, { useState } from 'react'
import Input from './common/Input';
import Button from './common/Button';

const ControlledForm = () => {
    const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [InputValue, setInputValue] = useState(initialValue);
    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="max-w-[1140px] w-full px-4 mt-4">
                    <div className="font-mono font-semibold text-4xl text-center text-gray-500 pb-10 sm:text-6xl">Controlled Form</div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Input
                            name="firstName"
                            value={InputValue.firstName}
                            type="text"
                            placeholder="First Name"
                            onchange={(e) => setInputValue({ ...InputValue, firstName: e.target.value })} />
                        <Input
                            name="lastName"
                            value={InputValue.lastName}
                            type="text"
                            placeholder="Last Name"
                            onchange={(e) => setInputValue({ ...InputValue, lastName: e.target.value })}
                        />
                    </div>
                    <Input
                        inputClass="sm:max-w-[816px] mx-auto flex mt-4"
                        name="email"
                        value={InputValue.email}
                        type="email"
                        placeholder="Email"
                        onchange={(e) => setInputValue({ ...InputValue, email: e.target.value })} />
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                        <Input
                            name="password"
                            value={InputValue.password}
                            type="Password"
                            placeholder="Password"
                            onchange={(e) => setInputValue({ ...InputValue, password: e.target.value })} />
                        <Input
                            name="confirmPassword"
                            value={InputValue.confirmPassword}
                            type="Password"
                            placeholder="Confirm Password"
                            onchange={(e) => setInputValue({ ...InputValue, confirmPassword: e.target.value })}
                        />
                    </div>
                    <Button type="Submit" text="Submit" />
                </div>
            </div>
        </>
    )
}

export default ControlledForm