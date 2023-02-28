let btn = document.querySelector('.btn')
let list = document.querySelector('.list')
let input = document.querySelector('.input')
let todos = []
let i

localStorage.getItem('todos')? todos = JSON.parse(localStorage.getItem('todos')) : todos = []
console.log(todos)

// todos = JSON.parse(localStorage.getItem('todos'))

i = todos.length

btn.addEventListener('click', () => {
    todos.forEach((item) => {
        if (input.value == item.name) {
            input.value = ''
            return
        }

    })
})

if (todos) {
    todos.forEach((item, index, arr) => {
        let butt = document.createElement('button')             // создаём кнопку
        let butt_delete = document.createElement('button')      // создаём кнопку удаления
        let taskname_container = document.createElement('div')  // создаём контейнер для заголовка
        let button_wrap = document.createElement('div')         // создаём контейнер для кнопок
        let task_name = document.createElement('span')          // создаём текст заголовка
        let list_item = document.createElement('li')            // создаём список задач
        let i = item.i
        taskname_container.classList.add('butcont')             // устанавливаем класс контейнера
        button_wrap.classList.add('spancont')                   // устанавливаем класс контейнера
        task_name.classList.add('itm')                          // устанавливаем класс текста
        task_name.textContent = item.name                   // устанавливаем текст заголовка
        butt.classList.add('ib')                                // устанавливаем класс кнопки
        butt.textContent = 'Done'                               // устанавливаем текст кнопки
        butt_delete.classList.add('ib_del')                     // устанавливаем класс кнопки удаления
        butt_delete.textContent = 'Delete'                      // устанавливаем текст кнопки удаления
        list_item.classList.add('item')     
        // input.addEventListener('input', () => {
        //     todos.forEach((item) => {
        //         if (input.value === item.name) {
        //             return
        //         }

        //     })
        // })
        // устанавливаем класс списка
        taskname_container.append(task_name)                    // добавляем текст заголовка в контейнер
        button_wrap.append(butt, butt_delete)                   // добавляем кнопки в контейнер
        list_item.append(taskname_container, button_wrap)       // добавляем контейнер в список
        list.append(list_item)                                  // добавляем список в контейнер
        let task = {                                            // создаём объект задачи
            name: item.name,
            done: item.done,
            id: i ,
        }
        todos.forEach((item, index) => {
            if (item.id === task.id) {
                item.id + 2
            }
        })

        if (task.done == true) {
            butt.textContent = 'Cancel'
            list_item.classList.add('done')
        } else {
            butt.textContent = 'Done'
            list_item.classList.remove('done')
        }


        i += 1
        
        butt.addEventListener('click', () => {                  // событие кнопки               
            list_item.classList.toggle('done')                  // устанавливаем класс списка
            if (list_item.classList.contains('done')) {         // если задача уже сделана
                item.done = true                                // устанавливаем значение правда
                butt.textContent = 'Cancel'                     // устанавливаем текст кнопки
            } else {                                            // иначе
                item.done = false                               // устанавливаем значение ложно
                butt.textContent = 'Done'                       // оставляем текст кнопки
            }
            localStorage.setItem('todos', JSON.stringify(todos)) // записываем в local storage
        })

        btn.addEventListener('click', () => {
            todos.forEach((item) => {
                if (input.value === item.name) {
                    input.value = ''
                    return
                } else {return}

            })
        })

        // butt_delete.addEventListener('click', () => {           // событие кнопки удаления
        //     list_item.remove(list_item)                         // удаляем задачу из списка
        //     todos.forEach((item, index) => {                    // удаляем задачу из массива
        //         if (item.name === task_name.textContent) {
        //             todos.splice(index, 1)
        //         }})
        //     localStorage.setItem('todos', JSON.stringify(todos))// записываем в local storage
        //     })

        butt_delete.addEventListener('click', () => {           // событие кнопки удаления
            list_item.remove(list_item)                         // удаляем задачу из списка
            let i = task_name.textContent
            todos.forEach((item, index) => {                    // удаляем задачу из массива
                if (item.name === i) 
                {
                    delete item.name
                        todos.splice(index, 1)
                        localStorage.setItem('todos', JSON.stringify(todos))
                        return
                } else return

            })

            localStorage.setItem('todos', JSON.stringify(todos))// записываем в local storage
            })

    })
}

btn.addEventListener('click', () => {
        if (!input.value) {                                     //если введено нулевой текст
            return                                                      //убираем кнопку
        }else{
            btn.addEventListener('click', () => {
                todos.forEach((item) => {
                    if (input.value == item.name) {
                        input.value = ''
                        return
                    } else if (input.value == task_name.textContent) 
                    {
                        input.value = ''
                        return
                    }

                })
            })

            let butt = document.createElement('button')             // создаём кнопку
            let butt_delete = document.createElement('button')      // создаём кнопку удаления
            let taskname_container = document.createElement('div')  // создаём контейнер для заголовка
            let button_wrap = document.createElement('div')         // создаём контейнер для кнопок
            let task_name = document.createElement('span')          // создаём текст заголовка
            let list_item = document.createElement('li')            // создаём список задач

            taskname_container.classList.add('butcont')             // устанавливаем класс контейнера
            button_wrap.classList.add('spancont')                   // устанавливаем класс контейнера
            task_name.classList.add('itm')                          // устанавливаем класс текста
            task_name.textContent = input.value                     // устанавливаем текст заголовка
            butt.classList.add('ib')                                // устанавливаем класс кнопки
            butt.textContent = 'Done'                               // устанавливаем текст кнопки
            butt_delete.classList.add('ib_del')                     // устанавливаем класс кнопки удаления
            butt_delete.textContent = 'Delete'                      // устанавливаем текст кнопки удаления
            list_item.classList.add('item')                         // устанавливаем класс списка

            btn.addEventListener('click', () => {
                todos.forEach((item) => {
                    if (input.value === item.name) {
                        input.value = ''
                        return
                    } else if (input.value === task_name.textContent) 
                    {
                        input.value = ''
                        return
                    }

                })
            })

            taskname_container.append(task_name)                    // добавляем текст заголовка в контейнер
            button_wrap.append(butt, butt_delete)                   // добавляем кнопки в контейнер
            list_item.append(taskname_container, button_wrap)       // добавляем контейнер в список
            list.append(list_item)

            let task = {                                            // создаём объект задачи
                name: input.value,
                done: false,
                id: i ,
            }
            todos.forEach((item, index) => {
                if (item.id === task.id) {
                    item.id + 2
                }
            })
            i += 1
            
            todos.push(task)                                        // Задача идет в массив

            localStorage.setItem('todos', JSON.stringify(todos))    // записываем в local storage

            butt.addEventListener('click', () => {                  // событие кнопки               
                list_item.classList.toggle('done')                  // устанавливаем класс списка
                if (list_item.classList.contains('done')) {         // если задача уже сделана
                    task.done = true                                // устанавливаем значение правда
                    butt.textContent = 'Cancel'                     // устанавливаем текст кнопки
                } else {                                            // иначе
                    task.done = false                               // устанавливаем значение ложно
                    butt.textContent = 'Done'                       // оставляем текст кнопки
                }
                localStorage.setItem('todos', JSON.stringify(todos)) // записываем в local storage
            })
            butt_delete.addEventListener('click', () => {           // событие кнопки удаления
                list_item.remove(list_item)                         // удаляем задачу из списка
                let i = task_name.textContent
                todos.forEach((item, index) => {                    // удаляем задачу из массива
                    if (item.name === i)
                    {
                        delete item.name
                        todos.splice(index, 1)
                        localStorage.setItem('todos', JSON.stringify(todos))
                        return false
                    }
                
                })
                
                // input.addEventListener('input', () => {
                //     if (input.value == task_name.textContent || input.value == task.name) {
                //         input.value = ''
                //     }
                // })

                localStorage.setItem('todos', JSON.stringify(todos))// записываем в local storage
                })
                
            input.value = ''                                        // очищаем поле ввода
        }

})
