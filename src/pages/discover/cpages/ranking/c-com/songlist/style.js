import styled from 'styled-components';
export const Songlistwrap = styled.div`
margin-left: 45px;
width: 740px;
&>.header{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &>.left{
        font-size: 30px;
        font-weight: 700;
    }
    &>.right{
        &>.count{
            color:red;
        }
    }
}
&>.list{
    &>.listheader{
        height: 40px;
        display: flex;
        &>span{
            border: 1px solid red;
            background:linear-gradient(to top,white,gray);
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 25px;
        }
        &>span:nth-child(1){
            flex:1;
        }
        &>span:nth-child(2){
            flex:4;
        }
        &>span:nth-child(3){
            flex:1;
        }
        &>span:nth-child(4){
            flex:2;
        }
    }
}
`

export const Listitem = styled.div.attrs()`
height:${props => props.height + "px"};
display: flex;
&>span{
    height:${props => props.height + "px"};
    line-height:${props => props.height + "px"};
    display: flex;
    align-items: center;
    &:nth-child(1){
        flex:1;
        &>span{
            color:green;
            margin-left: 20px;
        }
    }
    &:nth-child(2){
        flex:4;
        &>img{
            margin-left: 20px;
        }
        &>span{
            margin-left: 20px;
        }
    }
    &:nth-child(3){
        flex:1;
    }
    &:nth-child(4){
        flex:2;
    }
}
img{
    width: 55px;
}
`