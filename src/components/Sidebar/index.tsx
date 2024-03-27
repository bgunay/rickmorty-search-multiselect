import { useState } from "react";
import { FiHome, FiHeart } from "react-icons/fi";

import { ActiveLink } from "../ActiveLink";
import { BurgerButton } from "../BurgerButton";

import * as S from "./styles";

export function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <S.Container isOpened={showSidebar}>
        <BurgerButton
          isActive={showSidebar}
          onClick={() => setShowSidebar((state) => !state)}
        />

        <div>
          <ul>
            <li>
              <ActiveLink to="/">
                <FiHome />
              </ActiveLink>
            </li>
          </ul>
        </div>
      </S.Container>

      {showSidebar && <S.Backdrop onClick={() => setShowSidebar(false)} />}
    </>
  );
}
