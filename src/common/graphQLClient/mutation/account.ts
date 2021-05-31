import gql from 'graphql-tag';
import { getGqlString } from '../utils';

const role_module_menu_insertaccount = gql`
      mutation insertAccount($input: Anhuai_user_grpc_UserAccountFormInsertInput) {
            insertAccount(input: $input) {
                  id
            }
      }
`;

const role_module_menu_updateaccount = gql`
      mutation updateAccount($input: Anhuai_user_grpc_UserAccountFormUpdateInput) {
            updateAccount(input: $input) {
                  id
            }
      }
`;

const role_module_menu_deleteaccount = gql`
      mutation deleteAccount($input: Anhuai_user_grpc_UserAccountFormDeleteInput) {
            deleteAccount(input: $input) {
                  value
            }
      }
`;

const mutation = {
    role_module_menu_insertaccount: getGqlString(role_module_menu_insertaccount),
    role_module_menu_updateaccount: getGqlString(role_module_menu_updateaccount),
    role_module_menu_deleteaccount: getGqlString(role_module_menu_deleteaccount)
};

export default mutation;
