import data from '../../../shared/api/data.json';
import { Accordion } from '../../../shared/ui/Accordion/Accordion';
import { ContactMeButton } from '../../../shared/ui/ContactMeButton/ContactMeButton';

import photo from './images/main-photo.jpg';
import { StackSection } from './StackSection/StackSection';

import EmailIcon from './icons/email.svg?react';
import TelegramIcon from './icons/telegram.svg?react';

import './CVPage.css';

const CV = () => {
  return (
    <div className="cv-page">
      <header>
        <div className="header__columns">
          <div className="header__columns_left">
            <h1 className="header__name">Дарья Жаденко</h1>
            <h2>
              Frontend-разработчица{' '}
              <span className="header__experience">c 2020 года</span>
            </h2>{' '}
            {/* experience counter */}
            <p className="header__geo">📍 Омск, МСК+3</p>
            <p>
              <span className="header__english-label">
                Уровень английского:{' '}
              </span>
              <span className="header__english-label--mobile">🇬🇧 </span>
              B2&nbsp;(Upper-Intermediate)
            </p>
            <div className="header__contacts">
              <a href={data.telegram}>
                <TelegramIcon />
                {data.telegram_nickname}
              </a>
              <a href="mailto:dasha13zh@gmail.com">
                <EmailIcon />
                {data.email}
              </a>
            </div>
          </div>
          <div className="header__columns_right">
            <img src={photo} alt={`Darya's photo`} />
          </div>
        </div>
        <p className="header__about-me">
          Создаю приложения на React, которые не&nbsp;только технически надежны,
          но и&nbsp;доступны и&nbsp;ориентированы на&nbsp;пользователя
          и&nbsp;потребности бизнеса. Активно сотрудничаю
          с&nbsp;бэкенд-разработчиками и&nbsp;дизайнерами для&nbsp;создания
          целостного продукта.
          <br />
          <br />
          Имею успешный опыт работы как&nbsp;в&nbsp;составе больших
          кросс-функциональных команд, так&nbsp;и&nbsp;полностью самостоятельно.
          Выступала в&nbsp;роли наставника для&nbsp;стажеров, помогая
          им&nbsp;адаптироваться и&nbsp;расти в&nbsp;профессии.
          <br />
          <br />
          Готова брать на&nbsp;себя ответственность за&nbsp;ключевые компоненты
          проекта, проводить код-ревью и&nbsp;участвовать в&nbsp;архитектурных
          решениях. Нахожусь в&nbsp;постоянном поиске новых вызовов
          и&nbsp;возможностей для&nbsp;профессионального роста.
        </p>
        <StackSection />
        <Accordion
          title="Навыки"
          content={
            <ul>
              <li>
                Создание веб-приложений с&nbsp;использованием React
                и&nbsp;TypeScript
              </li>
              <li>Написание отзывчивых и&nbsp;mobile-friendly интерфейсов</li>
              <li>Интернационализация интерфейсов</li>
              <li>Интеграция с&nbsp;внешними API</li>
              <li>
                Работа с&nbsp;библиотеками компонентов, например, Material UI и
                Ant Design
              </li>
              <li>Настройка сборки с&nbsp;помощью Rollup</li>
              <li>
                Настройка Service Worker для получения уведомлений
                из&nbsp;Firebase
              </li>
              <li>Настройка CI/CD с&nbsp;помощью Gitlab-CI</li>
              <li>Выяснение требований на английском и&nbsp;русском языках</li>
              <li>
                Работа в распределённых мультинациональных командах
                по&nbsp;гибким методологиям
              </li>
            </ul>
          }
          className="header__skills"
        />
      </header>

      <main>
        <section className="work-expirience">
          <h2 id="expirience">Опыт работы</h2>
          <hr />
          <div className="work-expirience__columns">
            <div>
              <h3>
                Frontend-разработчик,{' '}
                <a href="https://www.navozyme.com/">Navozyme</a>
              </h3>
              <p>
                Октябрь 2024 → Ноябрь 2025
                <br />
                <span className="accent-text">1 год 1 месяц</span>
              </p>
            </div>
            <div>
              <p>
                Была лидом frontend-направления и&nbsp;разрабатывала продукты
                для&nbsp;цифровизации процессов морской индустрии
                в&nbsp;интернациональной команде.
              </p>
              <p>Являлась&nbsp;наставником для стажеров.</p>
            </div>
          </div>
          <hr />
          <div className="work-expirience__columns">
            <div>
              <h3>
                Frontend-разработчик, <a href="https://7bits.ru/">7bits</a>
              </h3>
              <p>
                Июнь 2020 → Октябрь 2024
                <br />
                <span className="accent-text">4 года 3 месяца</span>
              </p>
            </div>
            <div>
              <p>
                БОльшую часть времени работала frontend-разработчиком, хотя
                начинала как&nbsp;full-stack, участвовала в&nbsp;разработке
                backend&apos;а на&nbsp;Node.js. Пробовала себя в&nbsp;роли PM
                на&nbsp;нескольких проектах в течение 2-х лет.
              </p>
              <p>
                Преподавала на курсах
                <a href="https://vk.com/itliftomsk">
                  «Разработка web-интерфесов» IT-lift
                </a>
                : разрабатывала теоретические материалы, записывала лекции
                и&nbsp;вела воркшопы. Также организовывала внутренние митапы
                по&nbsp;frontend-направлению.
              </p>
            </div>
          </div>
        </section>

        <section className="project-list">
          <h2 id="projects">Проекты</h2>
          <hr />

          <div className="project-list__project">
            <h3>
              Улучшила производительность интерфейсов для портовых вызовов
            </h3>
            <p>
              📍 Заказчик <a href="https://www.navozyme.com/">Navozyme</a>,
              Испания, Барселона
            </p>
            <p className="project__description">
              Проект для полной обработки портовых вызовов. Клиент-серверное
              приложение из 4-х компонентов: фронтенд для&nbsp;судовых агентов,
              фронтенд для капитанов, общая библиотека компонентов
              и&nbsp;бэкенд.
              <br />Я навела порядок на обоих фронтенд проектах: перенесла код
              на&nbsp;TS и&nbsp;React 19, добавила линтер и&nbsp;Prettier.
              Увеличила скорость загрузки контента на&nbsp;40%.
            </p>
            <div className="project__column">
              <div>
                <p className="project-column__role">
                  👩‍💻 Lead Frontend developer
                </p>
              </div>
            </div>
            <div className="project__column project__column_more">
              <Accordion
                title={'Стек проекта'}
                content={
                  <ul>
                    <li className="project__list-item">React</li>
                    <li className="project__list-item">TypeScript</li>
                    <li className="project__list-item">Redux Toolkit</li>
                    <li className="project__list-item">Next</li>
                    <li className="project__list-item">Storybook</li>
                    <li className="project__list-item">Sass</li>
                    <li className="project__list-item">React Hook Form</li>
                    <li className="project__list-item">ESLint</li>
                    <li className="project__list-item">Prettier</li>
                    <li className="project__list-item">Jest</li>
                    <li className="project__list-item">Sentry</li>
                  </ul>
                }
              />
              <Accordion
                title={'Что я cделала'}
                content={
                  <ul>
                    <li className="project__list-item">
                      Сделала полный редизайн приложения для морских агентов
                    </li>
                    <li className="project__list-item">
                      Перенесла проект на TS и React 19
                    </li>
                    <li className="project__list-item">
                      Добавила конфигурацию ESLint, Prettier и Husky
                    </li>
                    <li className="project__list-item">
                      Переделала многостраничные формы с добавлением валидации
                    </li>
                    <li className="project__list-item">
                      Реализовала загрузку и валидацию документов
                    </li>
                    <li className="project__list-item">
                      Увеличила покрытие проекта UI тестами на 60%
                    </li>
                    <li className="project__list-item">
                      Унифицировала обработку и отображение ошибок API-вызовов
                    </li>
                    <li className="project__list-item">Проводила код-ревью</li>
                  </ul>
                }
              />
            </div>
          </div>

          <hr />

          <div className="project-list__project">
            <h3>
              Внесла вклад в разработку платформы публичных пространств
              «Делай&nbsp;город»
            </h3>
            <p>
              📍 Заказчик{' '}
              <a href="https://vk.com/delaigorod">АНО «Делай город»</a>, Россия,
              Омск
            </p>
            <p>
              🔗 <a href="https://delaigorod.ru/">https://delaigorod.ru</a>
            </p>
            <p className="project__description">
              Платформа публичных пространств — это место, где&nbsp;любой
              неравнодушный житель Омска может создать проект
              по&nbsp;благоустройству городской территории, например: площадки
              возле дома. Она помогает объединить дизайнеров
              и&nbsp;исполнителей, финансово поддерживать проекты на&nbsp;карте,
              вести информационную ленту вашего проекта, а&nbsp;также
              предоставляет информацию о&nbsp;текущих государственных проектах
              городского благоустройства.
            </p>
            <div className="project__column">
              {/* <p className="accent-text">1 год</p> */}
              <div>
                <p className="project-column__role">👩‍💻 Frontend developer</p>
              </div>
            </div>
            <div className="project__column project__column_more">
              <Accordion
                title={'Стек проекта'}
                content={
                  <ul>
                    <li className="project__list-item">React</li>
                    <li className="project__list-item">TypeScript</li>
                    <li className="project__list-item">Redux Toolkit</li>
                    <li className="project__list-item">Leaflet</li>
                    <li className="project__list-item">
                      API Публичной Кадастровой Карты РФ
                    </li>
                    <li className="project__list-item">Nginx</li>
                    <li className="project__list-item">MinIO S3</li>
                    <li className="project__list-item">FSD архитектура</li>
                    <li className="project__list-item">Rollup</li>
                  </ul>
                }
              />
              <Accordion
                title={'Что я cделала'}
                content={
                  <ul>
                    <li className="project__list-item">
                      Создала библиотеку общих компонентов для&nbsp;двух
                      React-приложений
                    </li>
                    <li className="project__list-item">
                      Настроила сборку библиотеки компонентов с&nbsp;помощью
                      Rollup
                    </li>
                    <li className="project__list-item">
                      Реализовала установку библиотеки как npm-зависимости
                    </li>
                    <li className="project__list-item">
                      Добавила каталог проектов с&nbsp;фильтрами, сортировкой
                      и&nbsp;бесконечным скроллом
                    </li>
                    <li className="project__list-item">
                      Сделала возможным добавление новостных проектов на карту
                      на&nbsp;главной странице
                    </li>
                    <li className="project__list-item">
                      Сверстала адаптивный футер с&nbsp;контактной информацией
                    </li>
                    <li className="project__list-item">
                      Добавила карусель изображений проекта «До», «Идея»
                      и&nbsp;«После»
                    </li>
                    <li className="project__list-item">
                      Интегрировала сбор веб-аналитики с&nbsp;помощью Яндекс
                      Метрика
                    </li>
                    <li className="project__list-item">
                      Исправила ошибки с&nbsp;адаптивным отображением страниц
                      на&nbsp;мобильных устройствах
                    </li>
                    <li className="project__list-item">
                      Управляла проектом в&nbsp;течение 1-го месяца
                    </li>
                  </ul>
                }
              />
            </div>
          </div>

          <hr />

          <div className="project-list__project">
            <h3>
              Разработала с нуля интерфейс для менеджмента морских сертификатов
            </h3>
            <p>
              📍 Заказчик <a href="https://www.navozyme.com/">Navozyme</a>,
              Испания, Барселона
            </p>
            <p className="project__description">
              Кросс-платформенное (web, iOS, Android) приложение, которое
              помогает морякам легко управлять своими морскими сертификатами:
              запрашивать, отправлять на&nbsp;проверку, отзывать, предъявлять
              их&nbsp;проверяющим органам.
              <br />
              Я&nbsp;отвечала за&nbsp;клиентскую часть для&nbsp;администраторов.
              Работала с&nbsp;иностранной командой backend-разработки
              и&nbsp;дизайнером.
            </p>
            <div className="project__column">
              {/* <p className="accent-text">2 года</p> */}
              <div>
                <p className="project-column__role">
                  👩‍💻 Lead Frontend developer
                </p>
              </div>
            </div>
            <div className="project__column project__column_more">
              <Accordion
                title={'Стек проекта'}
                content={
                  <ul>
                    <li className="project__list-item">React</li>
                    <li className="project__list-item">TypeScript</li>
                    <li className="project__list-item">RTK query</li>
                    <li className="project__list-item">FSD архитектура</li>
                    <li className="project__list-item">Firebase</li>
                    <li className="project__list-item">Formik</li>
                    <li className="project__list-item">Storybook</li>
                    <li className="project__list-item">MaterialUI</li>
                    <li className="project__list-item">pdfme</li>
                    <li className="project__list-item">Recharts</li>
                    <li className="project__list-item">Sentry</li>
                  </ul>
                }
              />
              <Accordion
                title={'Что я cделала'}
                content={
                  <ul>
                    <li className="project__list-item">
                      Разработала с&nbsp;нуля интерфейс панели администратора
                    </li>
                    <li className="project__list-item">
                      Настроила Service Worker для&nbsp;сохранения
                      и&nbsp;отображения уведомлений Firebase
                    </li>
                    <li className="project__list-item">
                      Реализовала инструмент для&nbsp;создания
                      и&nbsp;редактирования шаблонов для&nbsp;сертификатов
                    </li>
                    <li className="project__list-item">
                      Интегрировала Storybook с&nbsp;готовыми компонентами
                    </li>
                    <li className="project__list-item">
                      Добавила отображение данных в&nbsp;виде диаграмм
                      на&nbsp;странице панели мониторинга
                    </li>
                    <li className="project__list-item">
                      Сверстала пошаговые формы с&nbsp;валидацией для создания
                      и&nbsp;редактирования различных бизнес-сущностей
                    </li>
                    <li className="project__list-item">
                      Добавила интеграцию c&nbsp;Sentry для&nbsp;логирования
                      и&nbsp;сбора информации об&nbsp;ошибках
                    </li>
                  </ul>
                }
              />
            </div>
          </div>

          <hr />

          <div className="project-list__project">
            <h3>
              Улучшила работу приложения для декларирования судовых отходов
            </h3>
            <p>
              📍 Заказчик <a href="https://www.navozyme.com/">Navozyme</a>,
              Испания, Барселона
            </p>
            <p className="project__description">
              Mobile-first веб-приложение для&nbsp;упрощения декларирования
              отходов на&nbsp;судне в&nbsp;соответствии с&nbsp;Международной
              конвенцией по&nbsp;предотвращению загрязнения с&nbsp;судов
              (MARPOL). Вместо заполнения бумажных форм, судовые агенты
              и&nbsp;капитаны заполняют формы в&nbsp;приложении. Затем MARPOL
              агенты генерируют специальные сертификаты и&nbsp;декларации
              по&nbsp;этим данным.
            </p>
            <div className="project__column">
              <div>
                <p className="project-column__role">
                  👩‍💻 Lead Frontend developer
                </p>
              </div>
            </div>
            <div className="project__column project__column_more">
              <Accordion
                title={'Стек проекта'}
                content={
                  <ul>
                    <li className="project__list-item">React</li>
                    <li className="project__list-item">TypeScript</li>
                    <li className="project__list-item">Next</li>
                    <li className="project__list-item">i18next</li>
                    <li className="project__list-item">ESLint</li>
                    <li className="project__list-item">Prettier</li>
                    <li className="project__list-item">MaterialUI</li>
                    <li className="project__list-item">Jest</li>
                  </ul>
                }
              />
              <Accordion
                title={'Что я cделала'}
                content={
                  <ul>
                    <li className="project__list-item">
                      Добавила автоматическую архивацию отклоненных операций
                    </li>
                    <li className="project__list-item">
                      Реализовала фильтрацию архивных операций по&nbsp;статусу
                    </li>
                    <li className="project__list-item">
                      Настроила сохранение состояния между различными страницами
                      формы
                    </li>
                    <li className="project__list-item">
                      Сверстала гибкий и&nbsp;адаптивный интерфейс
                      под&nbsp;разные размеры экранов
                    </li>
                    <li className="project__list-item">Устраняла техдолг</li>
                    <li className="project__list-item">Проводила код-ревью</li>
                  </ul>
                }
              />
            </div>
          </div>
        </section>

        <section className="education-list">
          <h2 id="education">Обучение</h2>
          <hr />
          <div className="education-list__item project__column">
            <div>
              <p>Прикладная математика и компьютерные науки</p>
              <p className="accent-text">2017-2021</p>
            </div>
            <div>
              <p>
                <strong>Омский Государственный Университет</strong>
              </p>
              <p>
                Институт математики и&nbsp;информационных технологий, бакалавр
                прикладной математики и&nbsp;компьютерных наук
              </p>
            </div>
          </div>
          <hr />
          <div className="education-list__item project__column">
            <div>
              <p>Fullstack-разработка</p>
              <p className="accent-text">2019-2020</p>
            </div>
            <div>
              <p>
                <strong>IT-lift</strong>
              </p>
              <p>Годовой курс от IT-компании 7bits</p>
            </div>
          </div>
          <hr />
          <div className="education-list__item project__column">
            <div>
              <p>Разработка интерфейсов</p>
              <p className="accent-text">2024</p>
            </div>
            <div>
              <p>
                <strong>Яндекс</strong>
              </p>
              <p>
                Приняла участие в открытом лектории{' '}
                <a href="https://yandex.ru/yaintern/schools/frontend">
                  Школы разработки интерфейсов
                </a>
                &nbsp;и&nbsp;очном этапе с&nbsp;командной разработкой. Была
                тимлидом в&nbsp;команде из&nbsp;3-х frontend-разработчиков.
              </p>
            </div>
          </div>
        </section>
      </main>

      <ContactMeButton />
    </div>
  );
};

export default CV;
