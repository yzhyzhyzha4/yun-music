import styled from 'styled-components';
export const Headerwrap = styled.div.attrs({})
    `
    height: 270px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 40px;
    &>img{
        width: 168px;
        height: 168px;
    }
    &>.right{
        width: 530px;
        &>.top{
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            &>.b1{
                font-size: 40px;
                font-weight: 800;
            }
            &>.b2{
                margin-top: 20px;
                &>.er{
                    color:gray;
                }
            }
        }
        &>.bottom{
            margin-left: -10px;
        }
    }
    `