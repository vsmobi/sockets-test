import React, { useId } from 'react';
import { css } from '@emotion/react';

const SwitchCss = css`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  button {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    border: none;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + button {
    background-color: #2196F3;
  }

  input:focus + button {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + button:before {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

type SwitchProps = {
    isChecked: boolean,
    onChange: (nextState: boolean) => void
};
export const Switch = ({
    isChecked,
    onChange
}: SwitchProps) => {
    const id = useId();

    const handleChange = () => {
        onChange(!isChecked);
    };

    return (
        <label css={SwitchCss} htmlFor={id}>
            <input
                checked={isChecked}
                type="checkbox"
                name={id}
            />
            <button
                aria-label="Switch"
                type="button"
                onClick={handleChange}
            />
        </label>
    );
};
