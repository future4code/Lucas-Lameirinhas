import React from "react"
import { LogoImage, ScreenContainer, InputsContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import { Button, TextField } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import { primaryColor } from "../../constants/colors"
import { goToSignUp } from "../../routes/coordinator"
import { useHistory } from "react-router"

const LoginPage = () => {
    const [form, onChange, clear] = useForm({email:"", password:""})
    
    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"email"}
                        />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"password"}
                        />   

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={primaryColor}
                    >Login</Button>     

                </form>
            </InputsContainer>

            <SignUpButtonContainer>
            <Button
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={primaryColor}
                        onClick={() => goToSignUp(history)}
                    >Cadastre-se</Button> 
            </SignUpButtonContainer>
            
        </ScreenContainer>
    )
}

export default LoginPage