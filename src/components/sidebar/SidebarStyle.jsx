import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 416px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(26,30,41,.2);
    overflow: hidden;
    z-index: 1;
    display: flex;
    nav {
        width: 48px;
        height: 100%;
        max-height: 100%;
        border-right: 1px solid #e4e5e8;
        align-items: center;
        display: flex;
        flex-direction: column;
        padding-top: 24px;
        ul.menu-list {
            list-style: none;
            li {
                margin-bottom: 8px;
                a {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                   
                    &:after {
                        content: "";
                        position: absolute;
                        top: 0;
                        right: -4px;
                        width: 2px;
                        height: 100%;
                        background-color: #7124b7;
                        opacity: 0;
                        transition: opacity .25s ease;
                    }
                    &:hover,  &.active {
                        &:after {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
    .side-content-wrapper {
        width: calc(100% - 48px);
        height: 100%;
        overflow: hidden;
        .content-section {
            min-height: 100%;
            border-bottom: 1px solid #aaa;
            .title {
                padding: 24px;
                padding-bottom: 0;
                h3 {
                    background-color: rgba(113,36,183,.2);
                    font-family: Inter,sans-serif;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 12px;
                    color: #383d4c;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                }
            }
        }
    }
`;