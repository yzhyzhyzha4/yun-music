import styled from 'styled-components';

export const Fourspanwrap = styled.div.attrs({}

)`
display: flex;
justify-content: space-around;
height: 55px;
align-content: center;

&>span {
    width: 72px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background: linear-gradient(to top, white, gray);
    text-align: center;

    &:nth-child(1) {
        width: 102px;
        background: linear-gradient(white, #2475c3);

        &>.icon-tianjia {
            margin-left: 20px;
        }
    }

    &:last-child {
        width: 102px;
    }
}

`