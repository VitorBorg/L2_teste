import React from "react";
import * as S from "./styles";

import IconDataNFT from '../../molecules/iconDataNFT/index'

const HomeLauncher = () => {
  return (
    <S.Content>
      <S.BackgroundBlur > 
        <div />
        <div />
        <div />

        <S.Circles top="2vw" left="0px" width="25vh" height="25vh"/>
        <S.Circles top="-5.5vw" left="-7.5vw" width="50vh" height="50vh"/>
        <S.Circles top="-20vw" left="-22vw" width="100vh" height="100vh"/>
      </S.BackgroundBlur>

      <S.TitleContent>
        <div>
          <span>Non Fungible Tokens</span>
        </div>

        <S.Title1>
            <h1>A new NFT</h1> 
            <div><img src='/logo_right.png'/></div>
        </S.Title1>

        <S.Title2>
        <div><img src='/logo_left.png'/></div>
          <h1>Experience</h1>
        </S.Title2>
  
        <div>
          <span>Discover, collect and sell</span>
        </div>
      </S.TitleContent>

      <S.Marcas>
        <figure>
          <img src='/marca_1.png' alt=""/>
        </figure>  

        <figure>
          <img src='/marca_2.png' alt=""/>
        </figure>  

        <figure>
          <img src='/marca_3.png' alt=""/>
        </figure>  

        <figure>
          <img src='/marca_4.png' alt=""/>
        </figure>  
      </S.Marcas>
      
      <S.NFT>
        <IconDataNFT path='nft_1.png' number='2.55 ETH' color={(props) => props.theme.colors.PinkTransparency}/>
        <IconDataNFT path='nft_2.png' number='2.55 ETH' color={(props) => props.theme.colors.PinkTransparency}/>
        <IconDataNFT path='nft_3.png' number='2.55 ETH' color={(props) => props.theme.colors.PinkTransparency}/>
        <IconDataNFT path='nft_4.png' number='2.55 ETH' color={(props) => props.theme.colors.PinkTransparency}/>
        <IconDataNFT path='nft_5.png' number='2.55 ETH' color={(props) => props.theme.colors.PinkTransparency}/>
        <IconDataNFT path='nft_6.png' number='2.55 ETH' color={(props) => props.theme.colors.PinkTransparency}/>
      </S.NFT>

    </S.Content>
  );
};

export default HomeLauncher;