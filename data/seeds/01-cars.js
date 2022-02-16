// STRETCH
const autos = [
    {
        vin: '2C3CDXGJ2KH736742',
        make: 'Dodge',
        model: 'Charger',
        mileage: 36000,
        title: 'clean',
        transmission: 'Automatic',
    },
    {
        vin: '1G1JC6SH0F4166370',
        make: 'Chevrolet',
        model: 'Sonic LT',
        mileage: 121000,
        title: 'clean',
        transmission: 'Automatic',
    },
    {
        vin: '3N1AB7AP6KY272082',
        make: 'Nissan',
        model: 'Sentra S',
        mileage: 33000,
        title: 'clean',
        transmission: 'Manual',
    },
    {
        vin: 'JTEZU5JRXF5096393',
        make: 'Toyota',
        model: '4Runner SR5',
        mileage: 101000,
        title: 'clean',
        transmission: 'Automatic',
    },
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(autos)
  } 