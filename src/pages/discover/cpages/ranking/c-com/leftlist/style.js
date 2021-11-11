import styled from 'styled-components';

export const Leftlistwrap = styled.div.attrs({})
  `
  flex:1;
  width: 270px;
  border-left: 1px solid;
  border-right: 1px solid;
  margin-top: 20px;
  .header{
    font-weight: 800;
    font-size: 20px;
  }
  .active{
      background-color:#e6e6e6;
    }
  .listitem{
    width: 270px;
    height: 62px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    &>img{
      display: block;
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
    
    &>.info{
      width: 180px;
      height: 62px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &>.update{
        color:gray;
      }
    }
  }
  
`