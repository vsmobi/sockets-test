import React, { ChangeEventHandler, useId } from 'react';
import { css } from '@emotion/react';

const SwitchCss = css`
  position: relative;
  cursor: pointer;
  transition: background-color .2s;
  background: var(--color-grey-2);
  width: 60px;
  height: 33px;
  border-radius: 50px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    background: #fff;
    top: 4px;
    left: 4px;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    transition: 0.2s;
  }

  :has(input:checked) {
    background-color: var(--color-green-1);
  }

  input:checked + span {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
`;

type SwitchProps = {
    isChecked: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>
};

export const Switch = ({
    isChecked,
    onChange
}: SwitchProps) => {
    const id = useId();

    return (
        <label css={SwitchCss} htmlFor={id}>
            <input
                checked={isChecked}
                type="checkbox"
                id={id}
                onChange={onChange}
            />
            <span/>
        </label>
    );
};
