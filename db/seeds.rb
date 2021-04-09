User.create!([
  {email: "kevinn@mail.com", password: "123456", password_confirmation: "123456"},
  {email: "ryan@mail.com", password: "123456", password_confirmation: "123456"},
  {email: "cool_user@mail.com", password: "123456", password_confirmation: "123456"},
])

apts = [
  {
    street: '1 Street',
    city: 'San Diego',
    state: 'CA',
    manager: 'Man Ager',
    email: 'r&r@apartments.com',
    price: '$1289/m',
    bedrooms: '1 br',
    bathrooms: '1',
    pets: '2 Cats: Meow or Doggos: Woof',
    user_id: '1',
    pic:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    street: '45 Fake Lane',
    city: 'San Diego',
    state: 'CA',
    manager: 'Man Ager',
    email: 'r&r@apartments.com',
    price: '$1159/m',
    bedrooms: 'Studio',
    bathrooms: '1',
    pets: '1 Cats: Meow or Doggos: Woof',
    user_id: '1',
    pic:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    street: '5562 Nope street',
    city: 'Minatown',
    state: 'MC',
    manager: 'Mina Chuong',
    email: 'mchuo@r&rapartments.com',
    price: '$2065/m',
    bedrooms: '1',
    bathrooms: '4',
    pets: 'Any as long as you clean up ',
    user_id: '3',
    pic:
      'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    street: '9876 Notreal blvd',
    city: 'Sarahville',
    state: 'SP',
    manager: 'Sarah Proctor',
    email: 'sproc@r&rapartments.com',
    price: '$1159/m',
    bedrooms: '4',
    bathrooms: '1',
    pets: 'ALL the doggos and kitties',
    user_id: '2',
    pic:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
]

apts.each do |apt|
  Apartment.create apt
  puts "Created apt: #{apt}"
end
