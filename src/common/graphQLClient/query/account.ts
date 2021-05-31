import gql from "graphql-tag";
import { getGqlString } from "../utils";

const role_module_menu_getaccount = gql`
  query account($id: ID!) {
    account(id: $id) {
      id
      account
      password
      nickname
      imageUrl
      sex
      birthday
      cellphone
      email
      groupType
      groupId
      insDate
      status
      wxUnionid
    }
  }
`;

const role_module_menu_getaccounts = gql`
  query accounts($query: Anhuai_user_grpc_UserAccountsQueryInput) {
    accounts(
      query: $query
    ) {
      items {
        id
        account
        password
        nickname
        imageUrl
        sex
        birthday
        cellphone
        email
        groupType
        groupId
        insDate
        status
        wxUnionid
      }
      page
      size
    }
  }
`;

const query = {
  role_module_menu_getaccount: getGqlString(role_module_menu_getaccount),
  role_module_menu_getaccounts: getGqlString(role_module_menu_getaccounts),
};

export default query;
