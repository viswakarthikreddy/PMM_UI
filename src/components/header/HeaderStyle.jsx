import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const HeaderWrapper = styled(Container)`
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #c9cbd1;
    img.logo {
       max-width:100%;
        margin: 10px 0;
        height: 60px;
    }

    .logo-title {
        margin: 17px 0;
        font-size: 21px;
        padding: 10px 0;
        border-left: 3px solid #eee;
        padding-left: 20px;
        margin-left: -15px;
        span {
            padding-left: 15px;
            font-weight: normal;
            color: #888;
        }
    }

    .nav {
        justify-content: flex-end;
        .nav-item {
            a {
                display: block;
                padding: 8px 30px;
                margin: 20px 0;
                color: #222;
                &:hover {
                    text-decoration: none;
                }
                &.selected {
                    background-color: #f2f2f4;
                    color: #8903c0;
                }
            }

            &.profile-link-wrapper {
                margin: 15px 0;
                padding: 5px 15px;
                border-left: 3px solid #e1e1e1;
                margin-left: 15px;
                paddin-right: 0;
            }

            .profile-link {
                text-transform: uppercase;
                font-weight: 700;
                transition: color .125s ease-in-out,border-color .125s ease-in-out;
                border: 2px solid #c9cbd1;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                background-color: #f2f2f4;
                overflow: hidden;
   
            }
        }
    }
`;