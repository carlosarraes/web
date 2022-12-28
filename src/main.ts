import { User } from './models/User'
import { UserForm } from './views/UserForm'

const user = User.buildUser({ name: 'Lulu', age: 20 })

const userForm = new UserForm(document.getElementById('root') as Element, user)

userForm.render()
