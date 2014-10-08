module.exports = function gtoa(og, sg) {
  if (!og || !sg) {
    throw new Error('Givem me values plz');
  }
  return (og - sg) * 131
}
