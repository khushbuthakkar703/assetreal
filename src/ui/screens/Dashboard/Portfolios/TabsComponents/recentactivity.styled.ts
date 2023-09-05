import styled from 'styled-components';

export const RecentActivity = styled.div`
    overflow: auto;
    & * {
        font-family: 'PublicSans-medium';
    }

    table{
        width: 100%;
        border-spacing: 0 1.8rem;
        border-collapse: unset;
        min-width: 1000px;
        tbody{
            tr{
                .bodyColums-1{
                    .coins{
                        display: flex;
                        align-items: center;
                        img{
                            height : 30px;
                            width : 30px;
                            margin-right : 10px;
                        }
                        div{
                            h5{
                                font-size: 14px;
                                color: ${({ theme }) => theme.color.greyscale[3]};
                                line-height: 5px;                                
                                font-family: 'PublicSans-medium';
                            }
                            span{
                                
                                font-weight: 100;
                                font-size: 11px;
                                font-family: 'PublicSans-medium';
                                color: ${({ theme }) => theme.color.greyscale[4]};
                            }
                        }
                    }
                }
                .bodyColums-2{
                    text-align: end;
                }
            }
        }
    }
`

export const RecentHeader = styled.div`
    h5{
        font-weight: bold;
        font-size: 28px;
        line-height: 36px;
        color: ${({ theme }) => theme.color.greyscale[23]};
    }
    span{
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.color.greyscale[21]};
    }
`

export const LgTable = styled.div`
    @media only screen and (max-width: 950px) {
        display : none;
    }
`

export const SmTable = styled.div`
    display : none;
    @media only screen and (max-width: 950px) {
        display : block;
    }

    .coinColums{
        .MainColums{
            display: flex;
            // align-items: center;
            border: 1px solid ${({ theme }) => theme.color.border[3]};
            padding: 0.5rem;
            border-radius: 7px;
            margin: 1rem 0;
            .MainCoins{
                width : 50%;
                .coins{
                    margin: 1rem 0;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 5px;
                    }
                    div{
                        h5{
                            
                            font-weight: 100;
                            font-size: 12px;
                            color: ${({ theme }) => theme.color.greyscale[24]};
                            line-height: 10px;
                        }
                        span{                            
                            font-weight: 100;
                            font-size: 12px;
                            color: ${({ theme }) => theme.color.greyscale[24]};
                            opacity: 0.46;
                            width: 75px;
                            display: block;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
`