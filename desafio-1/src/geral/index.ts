import { User } from '../mock';

export function teste1(numbers: number[]): number[] {
  const findDuplicates = (numbers) => {
    let sorted_numbers = numbers.slice().sort();

    let results = [];
    for (let i = 0; i < sorted_numbers.length - 1; i++) {
      if (sorted_numbers[i + 1] == sorted_numbers[i]) {
        results.push(sorted_numbers[i]);
      }
    }
    return results;
  }

  const arrUnique = [... new Set(findDuplicates(numbers))];
  const orderedNumbers = arrUnique.sort((a, b) => a - b);
  return orderedNumbers;
}

export function teste2(users: User[]): User {
  const nomeProcurado = users.find((user) => user.name.includes('Alvares Cabral'));

  return nomeProcurado;
}
