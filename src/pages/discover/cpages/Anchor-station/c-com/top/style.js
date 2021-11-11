import styled from 'styled-components';
export const Topwrap = styled.div.attrs({})
    `
    display: flex;
    justify-content: center;
    align-items: center;
    with: 100%;
    &>span{
        font-weight: 800;
        font-size: 30px;
        cursor: pointer;
    }
`

export const Carouselwrap = styled.div`
    width: 908px;
    height: 200px;
    display: flex; 
    margin-left: 20px;
    flex-wrap: wrap;
    padding-left: 10px;
    &>.itemlist{
        width: 70px;
        height: 70px;
        cursor: pointer;
        &:hover{
            background-color:#eeeeee;
        }
        &>.name{
            width: 48px;
            text-align: center;
        }
    }
`

export const Mimg = styled.div`
    width: 48px;
    height: 48px;
    background-image: url(${props => props.imgUrl});
    background-position: ${props => props.isred ? -48 + 'px' : 0 + 'px'};
`