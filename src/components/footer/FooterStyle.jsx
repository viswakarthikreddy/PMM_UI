import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background: #efefef;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 25px;
    .footer-menu {
        text-align: center;
        margin-bottom: 25px;
        .list-group-item {
            font-size: 15px;
            background: none;
            border: none;
        }
    }
`;

export const CopyrightWrapper = styled.div`
    background: #505759;
    text-align: center;
    color: #fff;
    padding: 15px 10px;
    font-size: 14px;
`;