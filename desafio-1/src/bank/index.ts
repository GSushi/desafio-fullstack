import { User } from '../mock';

type ITest2 = {
  password?: string;
  amount?: number;
  user_id: string;
};

type Test2Response = {
  success: boolean;
  message?: string;
};


export function teste1(users: User[], user_id: string): number {
  const userBalance = users.find((user) => user_id === user.id);
  const balance = userBalance.balance;

  return balance;
}

export function teste2(users: User[], info: ITest2): Test2Response {
  const userInfo = users.find((user) => info.user_id === user.id);
  if (userInfo != null) {
    if (userInfo.age != null && userInfo.balance != null
      && userInfo.id != null && userInfo.name != null && userInfo.password != null) {

      if (userInfo.password === info.password) {
        if (userInfo.balance >= info.amount) {
          const Test2Responsed = {
            success: true,
            message: "Operação de pagamento aprovada!"
          }

          return Test2Responsed;
        }
        else {
          const Test2Responsed = {
            success: false,
            message: 'Saldo insuficiente'
          }

          return Test2Responsed;
        }
      }
      else {
        const Test2Responsed = {
          success: false,
          message: 'Senha incorreta'
        }

        return Test2Responsed;
      }
    } else {
      const Test2Responsed = {
        success: false,
        message: 'Dados do usuário não encontrados!'
      }

      return Test2Responsed;
    }
  }
  else {
    const Test2Responsed = {
      success: false,
      message: 'Usuário não encontrado!'
    }

    return Test2Responsed;
  }
}


