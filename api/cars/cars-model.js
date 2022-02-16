const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const getByVinId = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = async (car) => {
  const [id] = await db('cars').insert(car) 
  return getById(id)
}

const updateById = (id, car) => {
  db('cars').where('id', id).update(car)
  return getById(id)
}

const deleteById = (id) => {
  return db('cars').where('id', id).del()
}

module.exports = {
  getAll,
  getById, 
  getByVinId,
  create,
  updateById,
  deleteById
}