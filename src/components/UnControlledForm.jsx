import React from 'react'
import Input from './common/Input';
import Button from './common/Button';

const UnControlledForm = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="max-w-[1140px] w-full px-4 mt-4">
                    <div className="font-mono font-semibold text-4xl text-center text-gray-500 pb-10 sm:text-6xl">Uncontrolled Form</div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Input type="text" placeholder="First Name" />
                        <Input type="text" placeholder="Last Name" />
                    </div>
                    <Input inputClass="sm:max-w-[816px] mx-auto flex mt-4" type="email" placeholder="Email" />
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                        <Input type="Password" placeholder="Password" />
                        <Input type="Password" placeholder="Confirm Password" />
                    </div>
                    <Button type="Submit" text="Submit" />
                </div>
            </div>
        </>
    )
}

export default UnControlledForm