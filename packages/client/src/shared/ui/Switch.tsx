import React, { useId } from 'react';
import { css } from '@emotion/react';

const SwitchCss = css`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 33px;

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
    background-color: var(--color-grey-2);
    transition: .4s;
    border-radius: 33px;
    border: none;

    &:before {
      position: absolute;
      content: "";
      height: 25px;
      width: 25px;
      left: 3px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + button {
    background-color: var(--color-green);
  }

  input:focus + button {
    box-shadow: 0 0 1px var(--color-green);
  }

  input:checked + button:before {
    left: calc(100% - 3px);
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
