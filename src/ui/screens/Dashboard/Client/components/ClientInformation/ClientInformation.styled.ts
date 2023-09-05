import styled from "styled-components";

export const MainBody = styled.div`
    padding: 15px 0;
`;

export const MainTitle = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.greyscale[23]};
    margin: 0;
`;

export const latestUpdate = styled.div`
    font-size: 11px;
    background: #397AFF;
    color: #fff;
    border-radius: 10px;
    padding: 1px 10px;
    margin: 0 20px;
`;

export const headerTitle = styled.div`    
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`;

export const infoRow = styled.div`    
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 20px;
`;

export const rowNumber = styled.div`    
    font-size: 12px;
    font-weight: 800;
    color: ${({ theme }) => theme.color.greyscale[28]};
    width: 50px;
`;

export const infoDetails = styled.div`    
    h3{
        font-size: 14px;
        margin: 0;
        color: ${({ theme }) => theme.color.greyscale[21]};
        font-weight: 600;
    }
    span{
        font-size: 12px;
        color: ${({ theme }) => theme.color.greyscale[23]};
        font-weight: 700;
        display: block;
    }
`;