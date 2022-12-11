import styled from "styled-components"
export default function Footer({movie, day}) {
    return (
        <FooterMovie data-test="footer">
            <div>
                <img src={movie.posterURL} />
            </div>
            <Hour>
                <p>{movie.title}</p>
                <p>{day.weekday} - {day.date}</p>
            </Hour>
        </FooterMovie>
    )
}

const FooterMovie = styled.footer`
    height: 117px;
    width: 100%;
    background: var(--footer);
    border: 1px solid #9EADBA;
    position: fixed;
    right: 0px;
    bottom:0px;

    display: flex;
    align-items: center;
    gap: 22px;
    padding: 0px 10px;
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.3rem;
    }
    
    div{
        width: 64px;
        height: 89px;
        display: flex;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    img{
        margin: auto;
        width: 48px;
        height: 72px;
    }


`

const Hour = styled.span`
    width: 100%;

`