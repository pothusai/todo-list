import React from "react";

import Button from '../../shared/componets/FormElements/Button'
import Input from "../../shared/componets/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css';




const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, false)

    const placeSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    
    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid title." onInput={inputHandler} />
        <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="please enter a valid description (at least 5 character)." onInput={inputHandler} />
        <Input id="address" element="input" label="Address" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid address." onInput={inputHandler} />
        <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
    )
} 


export default NewPlace