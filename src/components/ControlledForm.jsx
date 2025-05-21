import React, { useState } from 'react';
import Input from './common/Input';
import Button from './common/Button';

const ControlledForm = () => {
    const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const [inputValue, setInputValue] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", inputValue);
    };

    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="max-w-[1140px] w-full px-4 mt-4">
                    <div className="font-mono font-semibold text-4xl text-center text-gray-500 pb-10 sm:text-6xl">Controlled Form</div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Input
                                name="firstName"
                                value={inputValue.firstName}
                                type="text"
                                placeholder="First Name"
                                onchange={(e) => setInputValue({ ...inputValue, firstName: e.target.value })} />
                            <Input
                                name="lastName"
                                value={nputValue.lastName}
                                type="text"
                                placeholder="Last Name"
                                onchange={(e) => setInputValue({ ...inputValue, lastName: e.target.value })} />
                        </div>
                        <Input
                            inputClass="sm:max-w-[816px] mx-auto flex mt-4"
                            name="email"
                            value={inputValue.email}
                            type="email"
                            placeholder="Email"
                            onchange={(e) => setInputValue({ ...inputValue, email: e.target.value })} />
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                            <Input
                                name="password"
                                value={inputValue.password}
                                type="password"
                                placeholder="Password"
                                onchange={(e) => setInputValue({ ...inputValue, password: e.target.value })} />
                            <Input
                                name="confirmPassword"
                                value={inputValue.confirmPassword}
                                type="password"
                                placeholder="Confirm Password"
                                onchange={(e) => setInputValue({ ...inputValue, confirmPassword: e.target.value })} />
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button type="submit" text="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ControlledForm;