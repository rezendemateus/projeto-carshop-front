import { useNavigate } from "react-router-dom";
import { FooterHomePage, Header } from "../../components";
import StyledLogin from "./styled";
import ForgotPasswordForm from "../../components/ForgotPassword";
import { User, iRecoverPasswordUpdatePassword } from "../../context";
import { IBodySession } from "../../interfaces/session";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { sessionVaidated } from "../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup"
import { recoveriUpdatePassword } from "../../validations/user";

const NewPass = () => {
  const navigate = useNavigate();

  const { recoverPasswordUpdatePassword } = useContext(User)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iRecoverPasswordUpdatePassword>({
    resolver: yupResolver(recoveriUpdatePassword),
  });

  const onSubmitFunction = async (password: iRecoverPasswordUpdatePassword) => {
    recoverPasswordUpdatePassword(password)
    reset();

    navigate("/login")
  };

  return (
    <>
      <Header />
      <StyledLogin>
        <form className="container" onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="form-header">
            <h5>Nova Senha</h5>
          </div>

          <div className="form-inputs">

            {!showPassword ?
              <>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digitar senha" {...register("password")} />

              </> :
              <>
                <label htmlFor="password">Senha</label>
                <input type="text" id="password" placeholder="Digitar senha" {...register("password")} />
              </>
            }
            <p> {errors.password?.message}</p>

            {!showPassword ?
              <span className="SHOW" onClick={() => setShowPassword(true)}>SHOW</span>
              :
              <span className="HIDDEN" onClick={() => setShowPassword(false)}>HIDDEN</span>
            }

          </div>

          <div className="form-footer">
            <button type="submit" className="resetPass">
              Redefinir Senha
            </button>

            <button
              type="button"
              className="login"
              onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </form>
      </StyledLogin >
      <FooterHomePage />

    </>
  );
};

export default NewPass;
