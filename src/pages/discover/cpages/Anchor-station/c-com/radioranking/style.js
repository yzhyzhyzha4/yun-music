import styled from 'styled-components';

export const Radiorankingwrap = styled.div`
width: 898px;
&>.header{
    font-weight: 800;
    font-size: 30px;
}
`

export const Listwrap = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
`
export const Rankinglist = styled.div`
display: flex;
width:45%;
padding:20px 0;
border-bottom: 1px solid gray;
margin-left: 20px;
&>img{
    display: block;
    width: 120px;
    height: 120px;
}
&>.right{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &>.top{
        font-size: 25px;
        font-weight: 500;
    }
    &>.bottom{
        &>.bottom{
           &>.subscribe{
               margin-left: 10px;
           }
        }
    }
}
`

export const Paginationwrap = styled.div`
width:100%;
display: flex;
justify-content: center;
margin-top: 20px;
`