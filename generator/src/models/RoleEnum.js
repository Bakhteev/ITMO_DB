// let id = 1

// export class role {
//   id = { generate: GENERATE_TYPES.AUTO, type: DATA_TYPES.INT, value: 0 }
//   role_name = {
//     generate: GENERATE_TYPES.MANUAL,
//     type: DATA_TYPES.STRING,
//     value: '',
//   }
//   created_at = {
//     generate: GENERATE_TYPES.AUTO,
//     type: DATA_TYPES.DATE,
//     value: '',
//   }
//   updated_at = {
//     generate: GENERATE_TYPES.AUTO,
//     type: DATA_TYPES.DATE,
//     value: '',
//   }

//   constructor(role_name) {
//     this.role_name.value = role_name
//     this.id.value = id
//     id++
//   }
// }

export const RoleEnum = {
  USER: 'user',
  BOSS: 'boss',
  ARENDATOR: 'arendator',
  HELPER: 'helper',
}
