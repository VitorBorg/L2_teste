import React from "react";
import * as S from "./styles";

import LogoName from "../../atoms/logoName/index"
import ButtonPurple from '../../molecules/buttonPurple/index';
import FacebookIcon from '../../atoms/facebookIcon/index';
import InstagramIcon from '../../atoms/instagramIcon/index';
import GithubIcon from '../../atoms/githubIcon/index';
import TwitterIcon from '../../atoms/twitterIcon/index';
import LinkedinIcon from '../../atoms/linkedinIcon/index'

const FooterPage = () => {
  return (
   <>
   <S.FooterStyle>
    <S.FooterSection>
      <div><LogoName /></div>
      <S.MenuDivLinksUseful>
          <a>Support</a>
          <a>Term of service</a>
          <a>License</a>
        </S.MenuDivLinksUseful>
    </S.FooterSection>

    <S.FooterSection>
      <S.Contact>
        <S.MenuDivLinks>
          <a>Auctions</a>
          <a>Roadmap</a>
          <a>Discover</a>
          <a>Community</a>
        </S.MenuDivLinks>

        <div>
          <ButtonPurple text="My account"/>
        </div>
      </S.Contact>

      <S.Social>
        <a><FacebookIcon /></a>
        <a><LinkedinIcon /></a>
        <a><GithubIcon /></a>
        <a><TwitterIcon /></a>
        <a><InstagramIcon /></a>
      </S.Social>
    </S.FooterSection>

    <S.FooterSection>
      <div><span>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </span></div>
      <S.PlaceHolder>
        <input placeholder='Newsletter'/>
        <a>Sign in</a>
      </S.PlaceHolder>
    </S.FooterSection>
   </S.FooterStyle>
   </>
  );
};

export default FooterPage;