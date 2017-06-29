export const GOT_STUDENT = 'GOT_STUDENT'

export default (student) => {
  return {
    type: GOT_STUDENT,
    payload: student
  }
}
