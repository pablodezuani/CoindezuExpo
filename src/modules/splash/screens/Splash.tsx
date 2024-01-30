import React, { useEffect } from "react";
import { Imagelogo } from "../../login/styles/login.style";
import { ContanerSplash, ImagelogoSplash } from "../styles/splash.style";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_USER } from "../../../shared/components/constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useUserReducer } from "../../../store/reducers/userReducers/useUserReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { getAuthorizationToken } from "../../../shared/components/functions/connection/auth";
import { UserType } from "../../../shared/types/userType";

const TIME_SLEEP = 5000;

const Splash = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();

  useEffect(() => {
    const findUser = async (): Promise<undefined | UserType> => {
      let returnUser;
      const token = await getAuthorizationToken();
      if (token) {
        returnUser = await request<UserType>({
          url: URL_USER,
          method: MethodEnum.GET,
          saveGlobal: setUser,
        });
      }

      return returnUser;
    };

    const verifyLogin = async () => {
      const [returnUser] = await Promise.all([
        findUser(),
        new Promise<void>((r) => setTimeout(r, TIME_SLEEP)),
      ]);

      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };

    verifyLogin();
  }, []);

  return (
    <ContanerSplash>
      <ImagelogoSplash resizeMode="contain" source={require('../../../assets/images/logo.png')} />
    </ContanerSplash>
  );
};

export default Splash;
