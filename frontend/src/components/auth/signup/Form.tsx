import React from "react";
import styled from "styled-components";
import { Button, InputAdornment, TextField } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useNavigate } from "react-router-dom";
import useAuth from "@/store/atoms/useAuth";
import { IUser } from "types/auth";

export default function Form() {
  const navigate = useNavigate();
  const { formState, updateUser, confirmUser, getToken } = useAuth();
  const isPasswordDisabled = !!getToken();

  const updateHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    updateUser(target.name as keyof IUser, target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!confirmUser()) return alert("필수정보를 모두 입력해주세요");
    navigate("/signup/additional");
  };

  return (
    <StyledForm method="POST" onSubmit={submitHandler}>
      <TextField
        className="textField"
        // label="Email"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
        }}
        placeholder="example@gmail.com"
        required
        name="email"
        onChange={updateHandler}
        value={formState.user.email}
      />
      <TextField
        className="textField"
        // label="Password"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyOutlinedIcon />
            </InputAdornment>
          ),
        }}
        placeholder="비밀번호"
        required
        name="password"
        onChange={updateHandler}
        value={formState.user.password}
        disabled={isPasswordDisabled}
      />
      <TextField
        className="textField"
        // label="Confirm Password"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyOutlinedIcon />
            </InputAdornment>
          ),
        }}
        placeholder="비밀번호 확인"
        required
        name="passwordConfirm"
        onChange={updateHandler}
        value={formState.user.passwordConfirm}
        disabled={isPasswordDisabled}
      />
      <TextField
        className="textField"
        // label="Name"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmojiEmotionsOutlinedIcon />
            </InputAdornment>
          ),
        }}
        placeholder="이름"
        required
        name="name"
        onChange={updateHandler}
        value={formState.user.name}
      />
      <TextField
        className="textField"
        // label="Nickname"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon />
            </InputAdornment>
          ),
        }}
        placeholder="닉네임"
        required
        name="nickname"
        onChange={updateHandler}
        value={formState.user.nickname}
      />
      <Button variant="contained" disableElevation type="submit">
        Next
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  flex: 5;
  display: flex;
  flex-direction: column;

  .textField {
    margin-bottom: 3rem;

    fieldset {
      border-radius: 1rem;
    }
    input {
      font-size: 1.8rem;
    }
  }

  button {
    padding: 1rem;
    font-size: 1.8rem;
    border-radius: 1rem;
  }
`;
