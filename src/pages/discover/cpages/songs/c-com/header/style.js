import styled from 'styled-components';

export const Headerwrap1 = styled.div.attrs({})
    `
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width:100%;
    position: relative;
    &>.left{
        &>span:nth-child(1){
            font-size: 30px;
            font-weight: 800;
        }
        &>span:nth-child(2){
            margin-left: 20px;
            background-color: #fafafa;
            color:#0c88d2;
            width: 100px;
            height: 35px;
            font-size: 20px;
            cursor: pointer;
            &>span{
                margin-left: 10px;
                font-size: 15px;
            }
        }
    }
    &>.right{
        background-color:#c20c0c;
        font-size: 18px;
        width: 55px;
        height: 30px;
        color:white;
        text-align: center;
    }
    &>.seletion{
        position:absolute;
        width: 787px;
        height: 487px;
        left:64px;
        top:60px;
        z-index:10;
        background-color: #f2f2f2;
        box-shadow: 0 0 10px 2px #d3d3d3;
        border-radius: 5px;
        &::before{
            content: "";
            position: absolute;
            width: 0px;
            height: 0px;
            border-bottom: 15px solid #f2f2f2;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
            top:-10px;
            left:20px;
        }
        &>.header{
            height:50px;
            font-size: 15px;
            line-height:50px;
        }
        &>.listitem{
            display: flex;
            &>.left{
                width: 100px;
                height: 40px;
                display: flex;
                justify-content: space-around;
                align-items: flex-start;
                margin-top: 10px;
                border-right: 1px solid #e2e2e2;
                &>span:nth-child(1){
                    font-size: 30px;
                }
                &>span:nth-child(2){
                    font-size: 15px;
                    font-weight: 800;
                    height: 40px;
                    line-height: 40px;
                }
            }
            &>.right{
                &>.rightcontent{
                    display: flex;
                    width: 650px;
                    flex-wrap: wrap;
                    margin-top: 22px;
                    margin-left: 20px;
                    &>.listitem1{
                        height: 25px;
                        display: flex;
                        cursor: pointer;
                        &>span:nth-child(1){
                            width:auto;
                            display: block;
                            &:hover{
                                color: #0c88d2;
                            }
                        }
                        &>span:nth-child(2){
                            display: block;
                            width: 26px;
                            text-align: center;
                            color:#e2e2e2;
                        }
                    }
                }
            }
        }
    }
`