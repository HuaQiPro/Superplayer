let PlayEr = {
    "svg":{
        'close':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>',
        'left':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>',
        'next':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M308.31975294 758.37162686c-3.58477236 0-7.1695447-0.97766519-10.10254027-2.60710716-6.19187951-3.58477236-10.10254026-10.42842865-10.10254025-17.59797337V287.46289564c0-7.1695447 3.91066074-14.013201 10.10254025-17.59797336 6.19187951-3.58477236 14.013201-3.58477236 20.20508052 0l390.08840919 225.18888117c6.19187951 3.58477236 10.10254026 10.42842865 10.10254025 17.59797334s-3.91066074 14.013201-10.10254025 17.59797335L318.42229318 755.43863129c-2.93299556 1.95533037-6.5177679 2.93299556-10.10254024 2.93299557z"></path><path d="M718.93913102 758.04573846h-38.45483064c-9.77665186 0-17.59797335-7.82132149-17.59797335-17.59797336V284.85578847c0-9.77665186 7.82132149-17.59797335 17.59797335-17.59797335h38.45483064c9.77665186 0 17.59797335 7.82132149 17.59797334 17.59797335V740.12187672c0 10.10254026-7.82132149 17.92386174-17.59797334 17.92386174z"></path></svg>',
        'reb':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1007.4674 42.036669c-12.751909-12.751909-38.255728-12.751909-51.007638 0l-95.63932 95.63932c-57.383592-57.383592-133.895048-95.63932-210.406505-121.143139C376.247886-53.602651 95.70588 105.796216 19.194424 373.586313c-76.511456 274.166051 82.887411 554.708057 350.677507 631.219513 274.166051 76.511456 554.708057-82.887411 631.219514-350.677507 12.751909-38.255728-12.751909-76.511456-51.007638-89.263366s-76.511456 12.751909-89.263365 51.007637c-25.503819 89.263366-89.263366 165.774822-165.774822 216.78246-172.150776 102.015275-395.30919 38.255728-497.324465-133.895049-82.887411-140.271003-63.759547-312.421779 44.631683-433.564918 133.895048-146.646958 369.805371-159.398867 516.452329-19.127864l-114.767184 114.767184c-6.375955 6.375955-6.375955 12.751909-6.375955 19.127864 0 19.127864 19.127864 38.255728 38.255728 38.255728h312.42178c12.751909 0 31.879773-12.751909 31.879773-31.879773V67.540488c0-6.375955-6.375955-12.751909-12.751909-25.503819z"></path></svg>',
        'change':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z"></path></svg>',
        'lock':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m128-288H384V320c0-70.4 57.6-128 128-128s128 57.6 128 128v128z"></path></svg>',
        'open':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320h64c0-70.4 57.6-128 128-128s128 57.6 128 128v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z"></path></svg>',
        'pip':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M849.5 174.5a37.50000029 37.50000029 0 0 1 37.50000029 37.50000029v262.49999942h-75.00000058V249.49999971H212.00000029v525.00000058h225v74.99999971H174.5a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029V212.00000029a37.50000029 37.50000029 0 0 1 37.50000029-37.50000029h675z m0 375.00000029a37.50000029 37.50000029 0 0 1 37.50000029 37.49999942v225a37.50000029 37.50000029 0 0 1-37.50000029 37.50000029h-299.99999971a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029v-225a37.50000029 37.50000029 0 0 1 37.50000029-37.49999942h299.99999971z"></path></svg>',
        'dm':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M658.83227539 543.14624023h-81.57348633v-19.28100586h44.49462891c17.79785156 0 26.69677734-10.38208008 26.69677734-26.69677734v-106.78710937c0-25.21362305-14.83154297-28.17993164-23.73046875-28.17993164h-11.86523437c4.44946289-5.93261719 7.41577148-10.38208008 10.38208008-14.83154297 5.93261719-10.38208008 2.96630859-17.79785156-5.93261719-23.73046875-8.89892578-4.44946289-17.79785156-1.4831543-23.73046875 5.93261718-1.4831543 1.4831543-4.44946289 5.93261719-5.93261719 8.89892579-7.41577148 11.86523438-13.34838867 19.28100586-14.83154297 23.73046875H541.66308594c-5.93261719-10.38208008-13.34838867-22.24731445-20.76416016-34.11254883-5.93261719-7.41577148-14.83154297-8.89892578-23.73046875-4.44946289-8.89892578 5.93261719-11.86523438 14.83154297-5.93261719 23.73046875 2.96630859 2.96630859 5.93261719 8.89892578 10.38208008 16.31469726h-5.93261719c-8.89892578-1.4831543-14.83154297 1.4831543-19.28100585 4.44946289-4.44946289 4.44946289-5.93261719 11.86523438-5.93261719 20.76416016V497.16845703c0 8.89892578 1.4831543 16.31469727 5.93261719 20.76416016 4.44946289 4.44946289 11.86523438 5.93261719 19.28100585 5.93261719H541.66308594v20.76416015h-74.15771485c-2.96630859 0-5.93261719 0-8.89892578 4.44946289v-31.14624023c0-20.76416016-11.86523438-26.69677734-20.76416015-26.69677735h-37.07885743s-1.4831543-1.4831543 0-7.41577148l1.4831543-32.62939453c0-2.96630859 0-5.93261719 1.4831543-5.93261719H427.46020508c5.93261719 0 11.86523438-1.4831543 14.83154297-4.44946289 4.44946289-4.44946289 7.41577148-11.86523438 7.41577148-23.73046875V363.68457031c0-10.38208008-1.4831543-17.79785156-7.41577148-22.24731445-4.44946289-4.44946289-11.86523438-7.41577148-22.24731446-7.41577148h-47.4609375c-5.93261719 0-14.83154297 1.4831543-16.31469726 16.31469726 0 10.38208008 4.44946289 16.31469727 14.83154297 17.79785156h38.56201172c4.44946289 0 7.41577148 1.4831543 7.41577148 8.89892578v22.24731446c0 10.38208008-4.44946289 11.86523438-8.89892578 11.86523437h-16.31469727c-8.89892578 0-14.83154297 1.4831543-19.28100586 5.93261719-4.44946289 4.44946289-5.93261719 11.86523438-5.93261718 20.76416016l-1.4831543 62.29248047c0 7.41577148 1.4831543 14.83154297 5.93261719 17.79785156 4.44946289 4.44946289 10.38208008 5.93261719 17.79785156 5.93261719h29.66308594c2.96630859 0 4.44946289 0 4.44946289 1.48315429 1.4831543 1.4831543 2.96630859 2.96630859 1.48315429 10.38208008 0 1.4831543 0 5.93261719-1.48315429 11.86523438-1.4831543 31.14624023-4.44946289 43.01147461-5.93261719 47.4609375-4.44946289 8.89892578-19.28100586 4.44946289-31.14624023 0-13.34838867-4.44946289-19.28100586 1.4831543-23.73046875 7.41577148-4.44946289 10.38208008-1.4831543 19.28100586 8.89892578 23.73046875 34.11254883 11.86523438 57.84301758 10.38208008 72.67456054-5.93261719 4.44946289-4.44946289 10.38208008-14.83154297 13.34838868-48.94409179 2.96630859 4.44946289 7.41577148 5.93261719 10.38208007 5.93261718h74.15771485v50.4272461c0 4.44946289 1.4831543 14.83154297 17.79785156 14.83154297 10.38208008 0 16.31469727-5.93261719 16.31469727-14.83154297v-50.4272461h80.09033203c4.44946289 0 13.34838867-1.4831543 14.83154297-16.31469726 1.4831543-14.83154297-5.93261719-17.79785156-11.86523438-17.79785157z m-109.75341797-47.4609375h-38.56201172c-7.41577148 1.4831543-10.38208008-4.44946289-8.89892578-13.34838867v-25.21362304h47.4609375v38.56201171z m0-65.25878906h-47.4609375v-31.14624023c-1.4831543-7.41577148 1.4831543-10.38208008 8.89892578-8.89892578h38.56201172v40.04516601z m23.73046875-38.56201172h37.07885742c7.41577148-1.4831543 10.38208008 1.4831543 10.38208008 8.89892578v31.14624024h-47.4609375v-40.04516602z m0 102.33764649v-38.56201172h47.4609375V482.33691406c0 7.41577148-4.44946289 11.86523438-11.86523437 11.86523438h-35.59570313z"></path><path d="M666.24804688 246.51538086H357.75195312C286.56054687 246.51538086 230.20068359 302.87524414 230.20068359 374.06665039v209.12475586c0 69.70825195 56.35986328 127.55126953 127.55126954 127.55126953h77.12402343l60.80932617 60.80932617c4.44946289 4.44946289 10.38208008 5.93261719 16.31469727 5.93261719s11.86523438-1.4831543 16.31469727-5.93261719l60.80932617-60.80932617h77.12402344c69.70825195 0 127.55126953-56.35986328 127.55126953-127.55126953V374.06665039c0-71.19140625-56.35986328-127.55126953-127.55126953-127.55126953zM749.3046875 583.19140625c0 45.9777832-37.07885742 83.05664063-83.05664063 83.05664063h-86.02294921c-2.96630859 0-5.93261719 0-7.41577149 1.48315429-2.96630859 1.4831543-5.93261719 2.96630859-7.41577148 4.44946289L512 724.09106445l-51.91040039-51.91040039c-1.4831543-1.4831543-4.44946289-4.44946289-7.41577149-4.44946289-2.96630859-1.4831543-5.93261719-1.4831543-7.41577148-1.4831543h-86.02294922c-45.9777832 0-83.05664063-37.07885742-83.05664062-83.05664062V374.06665039c0-45.9777832 37.07885742-83.05664063 83.05664062-83.05664062h309.97924805c45.9777832 0 83.05664063 37.07885742 83.05664062 83.05664062v209.12475586z"></path></svg>',
        'content':'<svg viewBox="0 0 1171 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M471.63639456 552.7360494l75.28021931 0q-5.0745476 57.44946872-35.84772349 90.36419667t-78.0269932 32.91472792q-58.93924398 0-92.55230426-42.17926971t-33.65961587-114.9454924q0-70.57811506 33.84583753-113.31605041t84.73098278-42.73793537q53.81814081 0 84.35853882 31.65772992t35.28905783 89.85208595l-73.83699901 1e-8q-1.81566365-23.27774279-12.89586908-35.98739021t-29.65584397-12.70964742q-20.71719058 0-32.16983998 22.02074416t-11.45264942 64.57245783q0 17.45830662 1.81566365 30.54039802t6.56432347 25.27962811 14.52531107 18.71530525 24.02263011 6.56432349q34.54416991 0 39.66527308-50.55925685zM730.5780021 552.7360494l74.90777534 0q-5.0745476 57.44946872-35.66150181 90.36419667t-77.8407709 32.91472792q-58.93924398 0-92.55230427-42.17926971t-33.65961588-114.9454924q0-70.57811506 33.84583755-113.31605041t84.73098277-42.73793537q53.81814081 0 84.35853881 31.65772992t35.28905786 89.85208595l-74.20944299 1e-8q-1.44322031-23.27774279-12.70964741-35.98739021t-29.46962231-12.70964742q-20.71719058 0-32.16983998 22.02074416t-11.45264942 64.57245783q0 17.45830662 1.81566364 30.54039802t6.56432349 25.27962811 14.38564497 18.71530525 23.83640844 6.56432349q17.83075059 0 27.84018033-13.82697935t12.19753736-36.7322775zM861.16613811 509.43944841q0-75.28021932-5.63321388-111.64005286t-22.02074415-58.56680001q-2.18810763-2.88643999-4.88832593-5.07454759t-7.82132149-5.44699156-5.81943554-4.00377191q-31.28528595-22.90529883-253.49461597-22.90529882-227.3304332 0-258.24327582 22.90529882-1.81566365 1.44322031-6.37810118 4.18999358t-7.63509982 5.07454759-5.2607699 5.26076989q-16.38753092 21.83452249-21.83452247 58.00813438t-5.44699157 112.19871913q0 75.65266328 5.44699157 111.82627516t21.83452247 58.38057835q2.18810763 2.88643999 5.44699157 5.44699157t7.44887753 5.07454759 6.37810116 4.37621587q16.01508695 12.01131504 87.1053127 17.83075059t171.13796312 5.81943553q221.88344164 0 253.49461597-23.65018612 1.81566365-1.44322031 6.19187951-4.00377189t7.44887752-5.07454762 4.88832592-5.81943552q16.71341931-21.83452249 22.20696647-57.82191271t5.44699156-112.3849408zM930.99936521 232.66708964l0 558.66582072-744.88776052 0 0-558.66582071 744.88776052 0z"></path></svg>',
        'dm-off':'<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29 6.29a2 2 0 012-2h10.693a2 2 0 012 2v5.404a5.55 5.55 0 00-2.472-.55V8.274a.6.6 0 00-.6-.6h-.771l.321-.478a.6.6 0 10-.996-.67l-.771 1.148h-.317l-.772-1.148a.6.6 0 00-.996.67l.322.478h-.775a.6.6 0 00-.6.6v3.772a.6.6 0 00.6.6h1.609a5.602 5.602 0 00-.625.69h-1.463a.6.6 0 100 1.2h.763a5.554 5.554 0 00-.443 2.181c0 .76.152 1.484.428 2.144H6.289a2 2 0 01-2-2V6.29zm11.021 4.997a5.525 5.525 0 00-.552.158h-.626v-.684h1.178v.526zM6.277 7.332a.6.6 0 01.6-.6h2.378a.6.6 0 01.6.6v2.83a.6.6 0 01-.6.6H7.477v1.157h1.778a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6H6.877a.6.6 0 010-1.2h1.778v-2.1H6.877a.6.6 0 01-.6-.6V10.16a.6.6 0 01.6-.6h1.778V7.932H6.877a.6.6 0 01-.6-.6zm5.48 4.113v-.684h1.177v.684h-1.178zm0-1.884h1.177v-.688h-1.178v.688zm2.377 0h1.177v-.688h-1.178v.688z" fill="#fff"></path><path d="M20.425 16.713a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0z" fill="#fff"></path><path d="M15.258 16.802l1.028 1.079L18 15.859" stroke="#FE2C55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        'dm-no':'<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29 6.29a2 2 0 012-2h10.693a2 2 0 012 2v5.404a5.55 5.55 0 00-2.472-.55V8.274a.6.6 0 00-.6-.6h-.771l.321-.478a.6.6 0 10-.996-.67l-.771 1.148h-.317l-.772-1.148a.6.6 0 00-.996.67l.322.478h-.775a.6.6 0 00-.6.6v3.772a.6.6 0 00.6.6h1.609a5.602 5.602 0 00-.625.69h-1.463a.6.6 0 100 1.2h.763a5.554 5.554 0 00-.443 2.181c0 .76.152 1.484.428 2.144H6.289a2 2 0 01-2-2V6.29zm11.021 4.997a5.525 5.525 0 00-.552.158h-.626v-.684h1.178v.526zM6.277 7.332a.6.6 0 01.6-.6h2.378a.6.6 0 01.6.6v2.83a.6.6 0 01-.6.6H7.477v1.157h1.778a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6H6.877a.6.6 0 010-1.2h1.778v-2.1H6.877a.6.6 0 01-.6-.6V10.16a.6.6 0 01.6-.6h1.778V7.932H6.877a.6.6 0 01-.6-.6zm5.48 4.113v-.684h1.177v.684h-1.178zm0-1.884h1.177v-.688h-1.178v.688zm2.377 0h1.177v-.688h-1.178v.688z" fill="#fff"></path><circle cx="16.566" cy="16.714" r="3.855" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M17.613 18.824a2.355 2.355 0 01-3.157-3.157l3.157 3.157zm1.061-1.06l-3.158-3.158a2.355 2.355 0 013.158 3.158zm1.747-1.05a3.855 3.855 0 11-7.71 0 3.855 3.855 0 017.71 0z" fill="#FE2C55"></path></svg>',
        'dm-s':'<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="VP4NJV6i" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.867 6.29a2 2 0 012-2H16.44a2 2 0 012 2v5.25l-1.644-.959a1 1 0 00-.801-.09V8.272a.6.6 0 00-.6-.6h-.76l.32-.48a.6.6 0 00-.999-.666l-.764 1.146h-.305l-.764-1.146a.6.6 0 00-.998.666l.32.48h-.765a.6.6 0 00-.6.6v3.772a.6.6 0 00.6.6h1.57l-.605.353a1 1 0 00-.346.337h-1.091a.6.6 0 100 1.2h.94v4.178c0 .05.005.1.012.147H5.867a2 2 0 01-2-2V6.29zm10.927 4.87l-.488.285h-.67v-.684h1.158v.4zM5.836 7.333a.6.6 0 01.6-.6h2.358a.6.6 0 01.6.6v2.83a.6.6 0 01-.6.6H7.036v1.157h1.758a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6H6.436a.6.6 0 010-1.2h1.758v-2.1H6.436a.6.6 0 01-.6-.6V10.16a.6.6 0 01.6-.6h1.758V7.932H6.436a.6.6 0 01-.6-.6zm5.443 4.113v-.684h1.157v.684h-1.157zm0-1.884h1.157v-.688h-1.157v.688zm2.357 0h1.158v-.688h-1.158v.688z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.778 12.703a1 1 0 00-.98 0l-2.429 1.366a1 1 0 00-.51.871v2.688a1 1 0 00.51.871l2.429 1.366a1 1 0 00.98 0l2.429-1.366a1 1 0 00.51-.871V14.94a1 1 0 00-.51-.871l-2.429-1.366zm-.49 2.299a1.286 1.286 0 100 2.571 1.286 1.286 0 000-2.571z" fill="#fff"></path></svg>',
        'send':'<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 24 24"><rect x="4.664" y="4.668" width="14.667" height="14.667" rx="7.333" fill="#fff"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM7.966 10.137a.908.908 0 001.285 1.284l1.87-1.87v6.912a.908.908 0 001.816 0v-6.92l.809.808 1.07 1.07a.908.908 0 001.284-1.284l-3.302-3.302a1.081 1.081 0 00-1.53 0l-3.302 3.302z" fill="#FE2C55"></path></svg>',
    },
    "secondToTime":function(second){
        const add0 = (num) => (num < 10 ? `0${num}` : String(num));
        const hour = Math.floor(second / 3600);
        const min = Math.floor((second - hour * 3600) / 60);
        const sec = Math.floor(second - hour * 3600 - min * 60);
        return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
    },
    "group":function(s){
        let group = PlayEr.empty(ConFig['MesData']["group"]) ? "游客":ConFig['MesData']["group"],
            userTxt = s,
            userArr = userTxt.split(',');
        return userArr.indexOf(group);
    },
    "countDown":function(u,t){
        let v_time = Math.round($(t).text());
        let interval = setInterval(function(){
            let time = --v_time;
            if(time <= 0) {
                clearInterval(interval);
                u();
            }
            $(t).text(time);
        }, 1000);
    },
    "empty":function(s){
        return s == null || s === '';
    },
    "cookie":{
        'Set': function(name,value,days=7,type='1'){
            if(type === '1'){
                localStorage.setItem(name, value);
            }else{
                let exp = new Date();
                exp.setTime(exp.getTime() + days*24*60*60*1000);
                document.cookie=name+"="+encodeURIComponent(value)+";path=/;expires="+exp.toUTCString();
            }
        },
        'Get': function(name,type='1'){
            if(type === '1'){
                return localStorage.getItem(name);
            }else{
                let arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
                if(arr != null){ return decodeURIComponent(arr[2]); }
            }
        },
        'Del': function(name,type='1'){
            if(type === '1'){
                localStorage.removeItem(name);
            }else{
                let exp = new Date();
                exp.setTime(exp.getTime()-1);
                let cvAl = this.Get(name,ConFig['config']['rm']);
                if(cvAl != null){ document.cookie = name+"="+encodeURIComponent(cvAl)+";path=/;expires="+exp.toUTCString(); }
            }
        }
    },
    "GetRequest":function(){
        let url = decodeURI(location.search),theRequest = {};
        if (url.indexOf("?") !== -1) {
            let str = url.substr(1),s = str.split("&");
            for (let i = 0; i < s.length; i++) {
                theRequest[s[i].split("=")[0]] = decodeURI(s[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    "mes":function(e){
        let s = sessionStorage.getItem("MesData"),g = PlayEr.GetRequest();
        if(!PlayEr.empty(e)){
            ConFig["MesData"] = e;sessionStorage.removeItem("list");
            console.log("参数来自跨域传递");
        }else if(!PlayEr.empty(s) && PlayEr.empty(e)){
            ConFig["MesData"] = JSON.parse(s);
            console.log("参数来自本地存储");
        }else {
            ConFig["MesData"] = g;
            console.log("参数来自url传参");
        }

        if(!PlayEr.empty(g["nid"])){
            ConFig["MesData"]["nid"] = g["nid"];
        }
        if(!PlayEr.empty(g["sid"])){
            ConFig["MesData"]["sid"] = g["sid"];
        }
        if(!PlayEr.empty(g["id"])){
            ConFig["MesData"]["id"] = g["id"];
        }
        if(!PlayEr.empty(g["api"])){
            ConFig["MesData"]["api"] = g["api"];
        }
        if(!PlayEr.empty(g["name"])){
            ConFig["MesData"]["name"] = g["name"];
        }

        let list = sessionStorage.getItem("list");
        if(!PlayEr.empty(list) && !PlayEr.empty(ConFig["MesData"]["sid"])){
            let listData =  JSON.parse(list);
            let data = listData["url"][(Number(ConFig["MesData"]["sid"])-1)]["url"];
            let next = data[ConFig["MesData"]["nid"]];

            if(!PlayEr.empty(ConFig["MesData"]["nid"])){
                ConFig["MesData"]["name"] = listData["name"]+"-"+data[Number(ConFig["MesData"]["nid"])-1]["name"];
            }
            if(!PlayEr.empty(next)){
                ConFig["MesData"]["next"] = next["url"];
            }else{
                ConFig["MesData"]["next"] = "";
            }
        }else{
            PlayEr.list.api2();
        }

        sessionStorage.setItem("MesData",JSON.stringify(ConFig["MesData"]));
        PlayEr.Init();
    },
    "type":function(s){
        let t = "mp4";
        switch (ConFig['type']) {
            case 'auto':
                if (/.flv(#|\?|$)/i.exec(s)) {
                    t = 'flv';
                } else if (/m3u8(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                } else if (/.php(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                } else if (/.css(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                } else if (/.png(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                }
                break;
            case 'm3u8':
                t = "m3u8";
                break;
            case 'flv':
                t = "flv";
                break;
            case 'hls':
                t = "hls";
                break;
        }
        return t;
    },
    "play": function(){
        let playData = {
            "id": "player",
            width: '100%',
            height: '100%',
            autoplay:true,
        },xg = ConFig['config']['xg'];
        let u=PlayEr.ad.uic(ConFig['url']),t = PlayEr.type(u);
        playData["url"] = u;
        playData["volume"] = xg['volume'];
        if(xg["videoInit"] === '1'){
            playData["videoInit"] = true;
        }
        if(!PlayEr.empty(xg["playbackRate"])){
            playData["playbackRate"] = xg["playbackRate"].split(',');
        }
        if(xg["pip"] === '1'){
            playData["pip"] = true;
        }
        if(xg["screenShot"] === '1'){
            playData["screenShot"] = true;
        }
        if(xg["keyShortcut"] === '0'){
            playData["keyShortcut"] = 'off';
        }
        playData["airplay"] = xg["airplay"] === '1';
        playData["lang"] = xg['lang'];
        if (ConFig['config']['danMu_on'] === '1'){
            playData["closePlayerBlur"] = true;
            playData["closeControlsBlur"] = true;
            playData["closeFocusVideoFocus"] = true;
            playData["closePlayVideoFocus"] = true;
        }
        if(t=== 'flv') {
            $("title").after('<script src="../player/js/xgflv.min.js"></script>');
            PlayEr.void = new window.FlvJsPlayer(playData);
        }else if(t=== 'm3u8' || t === 'hls'){
            $("title").after('<script src="../player/js/xghls.min.js"></script>');
            PlayEr.void = new window.HlsJsPlayer(playData);
        }else{
            PlayEr.void = new Player(playData);
        }
    },
    "Init":function(){
        let html = PlayEr.tips.default();
        if(html.length > 10){
            box.html('<div class="bj bj-1" style="background-image:url('+ConFig['tips']['bj']+');"></div><div class="tips-box"></div>');
            $(".tips-box").html(html);
        }else{
            if(PlayEr.empty(ConFig['config']['ads']['user'])){
                PlayEr.load();
            }else{
                PlayEr.ad.Action();
            }
        }
        console.log(
            "\n" +
            " %c 超级播放器® %c Q"+"Q6"+"02"+"5"+"24"+"9"+"50 " +
            "\n",
            "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;",
            "background: #fadfa3; padding:5px 0; font-size:18px;"
        );
    },
    "load" : function(){
        PlayEr.play();
        let color = ConFig['config']['gx']['color'],css = '.s-on svg circle,.s-on svg path{fill:'+color+'!important}.t-color{color:'+color+'}.t-bj{background-color:'+color+'}.ec-subtitle p{'+ConFig["config"]["zm_style"]+'}'+PlayEr.header.logoCss()+'@media (max-width: 767px){.player-logo{width:'+ConFig['config']['gx']['wap_logo_width']+'}}';
        $("head").append('<style>'+css+'</style>');
        box.prepend('<div class="lock-box"></div><div class="ec-danMa text"><div class="ec-danMa-item ec-danMa-item--demo"></div></div><div class="ec-subtitle"></div>' +
            '<div class="header ease flex between text"><div class="player-title"></div><div class="flex qoe-normal" style="display:none"><div class="kui-time"></div><div class="batteryShape"><div class="level"><div class="percentage"></div></div></div></div></div>' +
            '<div class="player-list-off off"></div><div class="ec-box player-list"><div class="new-check"><div class="new-body"></div></div></div><div class="ec-remember"></div><div class="broadside seat'+ConFig['config']['seat']+'"></div>');
        $(".xgplayer-placeholder").prepend('<div class="dm-box flex dm-wap"><div class="dm-box-cc" data-id="0">'+PlayEr.svg['dm-off']+'</div><div class="dm-box-set">'+PlayEr.svg['dm-s']+'</div><div class="dm-br"></div>\n' +
            '<input class="dm-input flex-auto" type="text" data-time="'+ConFig['config']['danMu_interval']+'" autocomplete="off" placeholder="'+lg['dm-input']+'" maxlength="'+ConFig['config']['danMu_length']+'"><div class="dm-box-z"></div><div class="dm-send">'+PlayEr.svg['send']+'</div><div class="dm-set-box ec-box"><div id="dm_n1" class="dm-set-list ds-set-show"><div class="flex between" data-id="1">\n' +
            '<div class="dm-set-label">'+lg['dm-velocity']+'</div><div class="set-toggle flex"><span>'+lg['moderate']+'</span></div></div><div class="flex between" data-id="2"><div class="dm-set-label">'+lg['dm-size']+'</div>\n' +
            '<div class="set-toggle flex"><span>'+lg['gtc']+'</span></div></div><div class="flex between" data-id="3"><div class="dm-set-label">'+lg['dm-opacity']+'</div><div class="set-toggle flex"><span>100%</span></div>\n' +
            '</div><div class="flex between" data-id="4"><div class="dm-set-label">'+lg['dm-br']+'</div><div class="set-toggle flex"><span>3/4</span></div></div></div></div>\n' +
            '<div class="dm-style-box ec-box"><div class="dm-style-title">'+lg['dm-direction']+'</div><div class="content_dmP-1 flex">\n' +
            '<div class="item" data-type="right">'+lg['dm-roll']+'<i></i></div><div class="item" data-type="top">'+lg['dm-top']+'<i></i></div><div class="item on-1" data-type="bottom">'+lg['dm-bottom']+'<i></i></div></div>\n' +
            '<div class="dm-style-title">'+lg['dm-color']+'</div><div class="content_dmP-2 flex"><div class="item">'+lg['gtc']+'<i></i></div><div class="item" data-color="#02CC92" style="color:#02CC92;border-color:#02CC92;">青草绿<i></i></div>\n' +
            '<div class="item" data-color="#03A5FF"  style="color:#03A5FF;border-color:#03A5FF;">香菇蓝<i></i></div><div class="item" data-color="#FF893B"  style="color:#FF893B;border-color:#FF893B;">暖阳橙<i></i></div>\n' +
            '<div class="item" data-color="#FC265E"  style="color:#FC265E;border-color:#FC265E;">喜庆红<i></i></div><div class="item" data-color="#BE8DF7"  style="color:#BE8DF7;border-color:#BE8DF7;">销魂紫<i></i></div>\n' +
            '</div></div></div>');
        $(".xgplayer-controls").prepend('<div class="bnt-public list-bnt"><div class="xgplayer-icon">'+lg['list']+'</div></div>' +
            '<div class="bnt-public dm-bnt"><div class="xgplayer-icon">'+PlayEr.svg.dm+'</div></div>' +
            '<div class="bnt-public content-bnt"><div class="xgplayer-icon">'+PlayEr.svg.content+'</div></div>');
        PlayEr.LoadAnimation();
        PlayEr.header.Init();
        PlayEr.ad.Pause();
        if(PlayEr.empty(ConFig["config"]["zm_url"])){
            $(".content-bnt").remove();
        }else{
            PlayEr.subtitle.Init({url: ConFig["config"]["zm_url"], encoding: 'utf-8',});
        }
        PlayEr.danMu.Init();
        PlayEr.list.Init();
        PlayEr.list.next();
        PlayEr.list.autoNext();
        PlayEr.broadside();
        PlayEr.tas();
        //播放进度记录与删除
        PlayEr.void.on('timeupdate', function () {
            let time = PlayEr.void.video.currentTime;
            PlayEr.cookie.Set("time_" + ConFig['id2'],time,7,ConFig['config']['rm']);
        });
        PlayEr.void.on('ended', function () {
            PlayEr.cookie.Del("time_" + ConFig['id2'],ConFig['config']['rm']);
        });
        if(ConFig['config']['autoOrientation'] === '1'){
            PlayEr.void.on('requestFullscreen', function () {
                PlayEr.autoOrientation(true);
            });
            PlayEr.void.on('exitFullscreen', function () {
                PlayEr.autoOrientation(false);
            });
        }
    },
    "ad":{
        "Pause" :function(){
            if(ConFig['config']['ads']['pause']['state'] === '1'){
                let html = '<div class="pause-ad"><a href="'+ConFig['config']['ads']['pause']['link']+'" target="_blank"><img alt="" src="'+ConFig['config']['ads']['pause']['img']+'">\n' +
                    '</a><span class="ad-txt">'+lg['ad-name']+'</span><span class="ad-off">'+lg['ad-close']+'</span></div>';
                PlayEr.void.on('pause', function () {
                    if($(".pause-ad").length === 0) {
                        box.prepend(html);
                    }
                });
                PlayEr.void.on('play', function () {
                    $('.pause-ad').remove();
                });
                $(document).on('click','.ad-off', function () {
                    $('.pause-ad').remove();
                });
            }
        },
        "Action" :function(){
            if(PlayEr.group(ConFig['config']['ads']['user']) === -1){
                PlayEr.load();
            }else{
                if(ConFig['config']['ads']['state'].toString() === '1'){
                    let html = '<div class="action-ad"><video id="wyn" class="preview" width="100%" autoplay muted height="100%" src="'+ConFig['config']['ads']['vod']['time']+'"></video>' +
                        '<a target="_blank" href="'+ConFig['config']['ads']['vod']['link']+'" class="ad-bj"></a><span class="ad-txt">'+lg['ad-name']+'</span><a class="ad-off"><i></i>'+lg['ad-time']+'</a>' +
                        '<div class="vod-ad"><a target="_blank" href="'+ConFig['config']['ads']['vod']['link']+'" class="ad-play" data-id="0" href="javascript:">'+lg['ad-link']+'</a><a class="ad-muted" data-id="0" href="javascript:">'+lg['ad-tos']+'</a></div></div>';
                    box.prepend(html);
                    const wyn = document.querySelector("#wyn");
                    wyn.addEventListener('error', function() {
                        $('.action-ad').remove();
                        PlayEr.load();
                    });
                    wyn.addEventListener('play',function(){
                        let v_time = Math.round(wyn.duration);
                        $(".ad-off").html("<i>"+v_time+"</i>"+lg['ad-s']);
                        let interval = setInterval(function(){
                            let time = --v_time;
                            if(time <= 0) {
                                clearInterval(interval);
                                $('.action-ad').remove();
                                PlayEr.load();
                            }
                            $(".ad-off").children().html(time);
                        }, 1000);
                    });
                    let ad_m = $(".ad-muted");
                    ad_m.click(function(){
                        if(ad_m.data('id') === "1"){
                            wyn.muted = true;
                            ad_m.data("id","0").html(lg['ad-tos']);
                        }else{
                            wyn.muted = false;
                            ad_m.data("id","1").html(lg['ad-tso']);
                        }
                    });
                }else {
                    let html = '<div class="action-ad"><a href="'+ConFig['config']['ads']['pic']['link']+'" target="_blank"><img alt="" src="'+ConFig['config']['ads']['pic']['img']+'">\n' +
                        '</a><span class="ad-txt">'+lg['ad-name']+'</span><span class="ad-off">'+ConFig['config']['ads']['pic']['time']+lg['ad-s']+'</span><a target="_blank" href="'+ConFig['config']['ads']['pic']['link']+'" class="ad-link">'+lg['ad-link']+'</a></div>';
                    box.prepend(html);
                    let interval = setInterval(function(){
                        let time = --ConFig['config']['ads']['pic']['time'];
                        if(time <= 0) {
                            $('.action-ad').remove();
                            clearInterval(interval);
                            PlayEr.load();
                        }
                        $(".ad-off").html(time+lg['ad-s']);
                    }, 1000);
                }
            }
        },
        "uic":function(d){
            let ut = NotGm.enc.Utf8.parse('2890'+ConFig['config']['uid']+'tB959C'),
                mm = NotGm.enc.Utf8.parse("2F131BE91247866E"),
                decrypted = NotGm.BBS.decrypt(d, ut, {iv: mm, mode: NotGm.mode.CBC, padding: NotGm.pad.Pkcs7});
            return NotGm.enc.Utf8.stringify(decrypted);
        }
    },
    "tips" : {
        "default":function (){
            let html = '';
            switch(ConFig["code"]) {
                case 304:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["ip_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["ip_txt"]+'</p>';
                    break;
                case 301:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["empty_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["empty_txt"]+'</p>';
                    break;
                case 0:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["jx_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["jx_txt"]+'</p>';
                    break;
                case 101:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["qh_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["jx_txt"]+'</p><div class="api_switch flex center">'+ConFig["html"]+'</div>';
                    break;
                case 102:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["qh_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["qh_txt"]+'</p><div class="api_switch flex center">'+ConFig["html"]+'</div>';
                    break;
                case 103:
                    console.error("未匹配到接口地址返回原地址");
                    break;
            }
            return html;
        },
        'removeMsg':function(){
            $('.pop-msg').remove();
        },
        'msg':function(msg,timeout){
            let out_time = timeout || 3000;
            if($(".pop-msg").length > 0) {
                PlayEr.tips.removeMsg();
            }
            box.prepend('<div class="pop-msg vague'+ConFig["tips"]["vague"]+'"><div class="pop-content"></div></div>');
            $('.pop-msg .pop-content').html(msg);
            setTimeout(PlayEr.tips.removeMsg,out_time);
        },
    },
    "header":{
        "Init":function (){
            if(ConFig["config"]["gx"]["logo"] !== ''){
                this.logo();
            }
            if(ConFig["config"]["gx"]["marquee_s"] === '1'){
                this.marquee();
            }
            if(ConFig['MesData']["name"]){
                this.title(ConFig['MesData']["name"]);
            }
            if(ConFig["config"]["time"] === '1'){
                this.time();
            }
            if(ConFig["config"]["qfe"] === '1'){
                this.qfe();
            }
        },
        "logo":function(){
            box.prepend('<div class="player-logo"><img alt="logo" src="'+ConFig["config"]["gx"]["logo"]+'" /></div>');
        },
        "logoCss":function(){
            switch (ConFig['config']['gx']['logo_position']) {
                case "1":
                    return '.player-logo{left: 20px;top: 20px;width: 15%;}';
                case "2":
                    return '.player-logo{right: 20px;top: 20px;width: 15%;}';
                case "3":
                    return '.player-logo{left: 20px;bottom: 80px;width: 15%;}';
                default:
                    return  '.player-logo{right: 20px;bottom: 80px;width: 15%;}';
            }
        },
        "marquee": function(){
            box.prepend('<div class="bullet-screen" style="animation: bullet '+ConFig["config"]["gx"]["marquee_speed"]+'s linear infinite;color:'+ConFig["config"]["gx"]["marquee_style"]+'">'+ConFig["config"]["gx"]["marquee"]+'</div>');
            if(ConFig["config"]["gx"]["marquee_time"] !== '0'){
                setTimeout(function(){
                    $('.bullet-screen').remove();
                },ConFig["config"]["gx"]["marquee_time"]*1000);
            }
            PlayEr.void.on('pause', function () {
                $(".bullet-screen").css("animation-play-state","paused");
            });
            PlayEr.void.on('play', function () {
                $(".bullet-screen").css("animation-play-state","running");
            });
        },
        "time":function(){
            let n = new Date,o = n.getHours() < 10 ? "0" + n.getHours() : n.getHours(),t = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes();
            $(".kui-time").text(o + ":" + t);
            setTimeout((function () {
                PlayEr.header.time();
            }), 1e3);
            PlayEr.void.on('requestFullscreen', function () {
                $(".header .qoe-normal").show();
            });
            PlayEr.void.on('exitFullscreen', function () {
                $(".header .qoe-normal").hide();
            });
        },
        "qfe":function(){
            try {
                navigator.getBattery().then(function (battery) {
                    let t = battery.level * 100 + "%",c = $(".percentage");
                    t === "10%" ? c.css({"background-color":"red","width":t}) : c.css("width",t);
                    $(".batteryShape").show();
                    battery.addEventListener('levelchange',function (){
                        this.qfe();
                    })
                })
            }catch(err)
            {
                console.log("该浏览器不支持电量显示");
            }
        },
        "title":function(e){
            $(".player-title").text(e);
            PlayEr.header.onShowNameTipsMouseenter();
        },
        "onShowNameTipsMouseenter" : function(){
            let txtLength = document.querySelector('.player-title');
            if (txtLength.scrollWidth > txtLength.offsetWidth) {
                function fn(){
                    txtLength.innerHTML  = txtLength.innerHTML.slice(1)+txtLength.innerHTML[0];
                }
                setInterval(fn,200);
            }
        },
    },
    "subtitle":{
        "hide":false,
        "Init":function(e){
            const v = document.getElementsByTagName("video"),t = document.createElement("track");
            $(".content-bnt").click(function(){
                $(".ec-subtitle").toggle();
                if(PlayEr.subtitle.hide === false){
                    $(this).css("opacity",'0.6');
                    PlayEr.subtitle.hide = true;
                }else{
                    $(this).css("opacity",'');
                    PlayEr.subtitle.hide = false;
                }
            });
            t.default = !0;
            t.kind = "metadata";
            v[0].appendChild(t);
            fetch(e.url)
                .then((response) => response.arrayBuffer())
                .then((buffer) => {
                    const text = new TextDecoder(e.encoding).decode(buffer);
                    switch (e.type || this.getExt(e.url)) {
                        case 'srt':
                            return this.text.vttToBlob(this.text.srtToVtt(text));
                        case 'ass':
                            return this.text.vttToBlob(this.text.assToVtt(text));
                        case 'vtt':
                            return this.text.vttToBlob(text);
                        default:
                            return e.url;
                    }
                })
                .then((subUrl) => {
                    t.default = true;
                    t.kind = 'metadata';
                    t.src = subUrl.toString();
                    t.track.mode = 'hidden';
                    t.addEventListener("cuechange", this.text.update);
                })
                .catch((err) => {
                    PlayEr.tips.msg(lg['zm-error']);
                    throw err;
                });
        },
        "text":{
            "fixSrt" : function (srt){
                return srt.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (_, $1, $2) => {
                    let ms = $2.slice(0, 3);
                    if ($2.length === 1) {
                        ms = $2 + '00';
                    }
                    if ($2.length === 2) {
                        ms = $2 + '0';
                    }
                    return `${$1},${ms}`;
                });
            },
            "srtToVtt" :function(srtText) {
                return 'WEBVTT \r\n\r\n'.concat(
                    this.fixSrt(srtText)
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/{[\s\S]*?}/g, "")
                        .concat("\r\n\r\n")
                );
            },
            "vttToBlob" :function(vttText){
                return URL.createObjectURL(
                    new Blob([vttText], {
                        type: 'text/vtt',
                    }),
                );
            },
            "assToVtt" :function(ass){
                const reAss = new RegExp(
                    'Dialogue:\\s\\d,' +
                    '(\\d+:\\d\\d:\\d\\d.\\d\\d),' +
                    '(\\d+:\\d\\d:\\d\\d.\\d\\d),' +
                    '([^,]*),' +
                    '([^,]*),' +
                    '(?:[^,]*,){4}' +
                    '([\\s\\S]*)$',
                    'i',
                );
                function fixTime(time = '') {
                    return time
                        .split(/[:.]/)
                        .map((item, index, arr) => {
                            if (index === arr.length - 1) {
                                if (item.length === 1) {
                                    return `.${item}00`;
                                }

                                if (item.length === 2) {
                                    return `.${item}0`;
                                }
                            } else if (item.length === 1) {
                                return (index === 0 ? '0' : ':0') + item;
                            }
                            return index === 0 ? item : index === arr.length - 1 ? `.${item}` : `:${item}`;
                        })
                        .join('');
                }
                return `WEBVTT\n\n${ass
                    .split(/\r?\n/)
                    .map((line) => {
                        const m = line.match(reAss);
                        if (!m) return null;
                        return {
                            start: fixTime(m[1].trim()),
                            end: fixTime(m[2].trim()),
                            text: m[5]
                                .replace(/{[\s\S]*?}/g, '')
                                .replace(/(\\N)/g, '\n')
                                .trim()
                                .split(/\r?\n/)
                                .map((item) => item.trim())
                                .join('\n'),
                        };
                    })
                    .filter((line) => line)
                    .map((line, index) => {
                        if (line) {
                            return `${index + 1}\n${line.start} --> ${line.end}\n${line.text}`;
                        }
                        return '';
                    })
                    .filter((line) => line.trim())
                    .join('\n\n')}`;
            },
            "update":function(){
                const v = document.getElementsByTagName("video"),
                    d = v[0].textTracks[0]['activeCues'][0],
                    t = document.querySelector(".ec-subtitle");
                t.innerHTML = "";
                if (d) {//0, function (e){}
                    t.innerHTML = d['text'].split(/\r?\n/).map((e => `<p>${(function (e){
                        return e.replace(/[&<>'"]/g, (e => ({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;"
                        }[e] || e)));
                    })(e)}</p>`)).join('');
                }
            }
        },
        "getExt":function(e){
            return e.includes("?") ? n(e.split("?")[0]) : e.includes("#") ? n(e.split("#")[0]) : e.trim().toLowerCase().split(".").pop();
        }
    },
    "danMu": {
        "dm_api":[],
        "dan": [],
        "time": '',
        "danTunnel": {
            right: {},
            top: {},
            bottom: {},
        },
        "container": null,
        "off": false,//弹幕是否开启
        "showing": true,//是否显示弹幕
        "speedRate": 1,//速度
        "unlimited": false,//海量模式
        "height": 27,//设置不同大小字体后改变它调整高度
        "opacity": 1,//透明度
        "danIndex": 0,
        "fullScreen":false,
        "Init": function () {
            let dm_box = $(".dm-box");
            if (ConFig['config']['danMu_on'] === '0') {dm_box.remove(); $(".dm-bnt").remove();return}
            this.off = true;
            this.api();
            this.container = document.querySelector(".ec-danMa");
            //初始化高度
            let font_string = getComputedStyle(document.getElementsByClassName('ec-danMa')[0], null)['font-size']
            let font_string2 = font_string.slice(0,-2);
            this.height = Number(font_string2)+6;

            for (let i = [], o = 0; o < this.dm_api.length; ++o)
                this.apiBackend.read(this.dm_api[o][2], function (o) {
                    return function (s, r) {
                        if (s) {
                            s.response ? PlayEr.tips.msg(s.response.msg) : PlayEr.tips.msg(lg['dm-loading-err'] + s.status);
                            i[o] = [];
                        } else {
                            i[o] = r ? r.map(function (e) {
                                return {time: e[0], type: e[1], color: e[2], author: e[3], text: e[4], size: e[7]}
                            }) : [];
                            i[o] = i[o];
                            PlayEr.danMu.readAllEndpoints(i);
                        }
                    }
                }(o));
            this.content();

            //弹幕发布限制
            if(ConFig['config']['danMu_user'] === '1'){
                $('.dm-input').attr({'disabled':true,'placeholder':lg['dm-Sign']})
            }

            //弹幕输入框显示方法
            switch (ConFig['config']['danMu_input']) {
                case "0":
                    dm_box.hide();break;
                case "2":
                    dm_box.hide();
                    PlayEr.void.on('requestFullscreen', function () {dm_box.show();});
                    PlayEr.void.on('exitFullscreen', function () {dm_box.hide();});
                    break;
            }
            PlayEr.void.on('requestFullscreen', function () {
                PlayEr.danMu.fullScreen = true;
            });
            PlayEr.void.on('exitFullscreen', function () {
                PlayEr.danMu.fullScreen = false;
            });
            PlayEr.void.on('play', function () {
                box.addClass('dm-running');
            });
            PlayEr.void.on('pause', function () {
                box.removeClass('dm-running');
            });
            PlayEr.void.on('seeking', function () {
                PlayEr.danMu.seek();
            });
        },
        "api":function(){
            let dmId = ConFig["MesData"]["dmId"];
            if(!PlayEr.empty(dmId)){
                ConFig['id1'] = dmId;ConFig['id2'] = dmId;
            }
            let apiString = ConFig['config']['danMu_api'].split('#'),dm_api_array = [];
            for (let i=0; i<apiString.length; i++) {
                let t = apiString[i].split('$'),o = '',d = '';
                switch (t['0']) {
                    case "1":
                        d = ConFig['id1'];
                        o = '&id='+d;
                        break;
                    default:
                        d = ConFig['id2']+' P';
                        o = '&id='+d;
                        break;
                }
                dm_api_array[i] = [t['0'], t['1'], t['1']+o ,d];
            }
            this.dm_api = dm_api_array;
        },
        "apiBackend": {
            "read": function (e, t) {
                this.api(e, null, function (e, n) {
                    t(null, n.danmuku)
                }, function (e, n) {
                    t({status: e.status, response: n})
                }, function (e) {
                    t({status: e.status, response: null})
                });
            },
            "send": function (data, u) {
                this.api(PlayEr.danMu.dm_api[0][1], data, function () {
                    console.log("发送弹幕成功");
                    u(data);
                }, function (e, t) {
                    PlayEr.tips.msg(t.msg);
                }, function (e) {
                    console.log("Request was unsuccessful: " + e.status);
                });
            },
            "api": function (e, t, n, i, a) {
                let o = new XMLHttpRequest;
                o.onreadystatechange = function () {
                    if (4 === o.readyState) {
                        if (o.status >= 200 && o.status < 300 || 304 === o.status) {
                            let e = JSON.parse(o.responseText);
                            return 23 !== e.code ? i(o, e) : n(o, e);
                        }
                        a(o)
                    }
                };
                o.open(null !== t ? "POST" : "GET", e, !0);
                o.send(null !== t ? JSON.stringify(t) : null);
            }
        },
        "readAllEndpoints": function (t) {
            let e = this;
            e.dan = [].concat.apply([], t).sort(function (e, t) {
                return e.time - t.time;
            });
            window.requestAnimationFrame(function () {
                e.frame();
            });
        },
        "frame": function () {
            if (this.dan.length && !PlayEr.void.paused && this.showing) {
                let item = this.dan[this.danIndex];
                const dan = [];
                while (item && PlayEr.void.video.currentTime > parseFloat(item.time)) {
                    dan.push(item);
                    item = this.dan[++this.danIndex];
                }
                this.draw(dan);
            }
            window.requestAnimationFrame(() => {
                this.frame();
            });
        },
        "number2Color": function (number) {
            return '#' + ('00000' + number.toString()).slice(-6);
        },
        "number2Type": function (number) {
            switch (number) {
                case 0:
                case "right":
                    return 'right';
                case 1:
                case "top":
                    return 'top';
                case 2:
                case "bottom":
                    return 'bottom';
                default:
                    return 'right';
            }
        },
        "_measure": function (text) {
            if (!this.context) {
                const measureStyle = getComputedStyle(this.container.getElementsByClassName('ec-danMa-item')[0], null);
                this.context = document.createElement('canvas').getContext('2d');
                this.context.font = measureStyle.getPropertyValue('font');
            }
            return this.context.measureText(text).width;
        },
        "_danAnimation": function (position) {
            const rate = this.speedRate || 1;
            const isFullScreen = !!PlayEr.danMu.fullScreen;
            const animations = {
                top: `${(isFullScreen ? 6 : 4) / rate}s`,
                right: `${(isFullScreen ? 8 : 5) / rate}s`,
                bottom: `${(isFullScreen ? 6 : 4) / rate}s`,
            };
            return animations[position];
        },
        "seek": function () {
            if (!this.off) {
                return;
            }
            this.clear();
            for (let i = 0; i < this.dan.length; i++) {
                if (this.dan[i].time >= PlayEr.void.video.currentTime) {
                    this.danIndex = i;
                    break;
                }
                this.danIndex = this.dan.length;
            }
        },
        "clear": function () {
            this.danTunnel = {
                right: {},
                top: {},
                bottom: {},
            };
            this.danIndex = 0;
            this.container.innerHTML = '<div class="ec-danMa-item ec-danMa-item--demo"></div>';
        },
        "draw": function (dan) {
            if (this.showing) {
                const itemHeight = this.height;
                const danWidth = this.container.offsetWidth;
                const danHeight = this.container.offsetHeight;
                const itemY = parseInt(danHeight) / parseInt(itemHeight);

                const danItemRight = (ele) => {
                    const eleWidth = ele.offsetWidth || parseInt(ele.style.width);
                    const eleRight = ele.getBoundingClientRect().right || this.container.getBoundingClientRect().right + eleWidth;
                    return this.container.getBoundingClientRect().right - eleRight;
                };

                const danSpeed = (width) => (danWidth + width) / 5;

                const getTunnel = (ele, type, width) => {
                    const tmp = danWidth / danSpeed(width);

                    for (let i = 0; this.unlimited || i < itemY; i++) {
                        const item = this.danTunnel[type][i + ''];
                        if (item && item.length) {
                            if (type !== 'right') {
                                continue;
                            }
                            for (let j = 0; j < item.length; j++) {
                                const danRight = danItemRight(item[j]) - 10;
                                if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                                    break;
                                }
                                if (j === item.length - 1) {
                                    this.danTunnel[type][i + ''].push(ele);
                                    ele.addEventListener('animationend', () => {
                                        this.danTunnel[type][i + ''].splice(0, 1);
                                    });
                                    return i % itemY;
                                }
                            }
                        } else {
                            this.danTunnel[type][i + ''] = [ele];
                            ele.addEventListener('animationend', () => {
                                this.danTunnel[type][i + ''].splice(0, 1);
                            });
                            return i % itemY;
                        }
                    }
                    return -1;
                };

                if (Object.prototype.toString.call(dan) !== '[object Array]') {
                    dan = [dan];
                }

                const docFragment = document.createDocumentFragment();

                for (let i = 0; i < dan.length; i++) {

                    dan[i].type = this.number2Type(dan[i].type);
                    if (!dan[i].color) {
                        dan[i].color = 16777215;
                    }
                    const item = document.createElement('div');
                    item.classList.add('ec-danMa-item');
                    item.classList.add(`ec-danMa-${dan[i].type}`);
                    if (dan[i].border) {
                        item.innerHTML = `<span style="border:${dan[i].border}">${dan[i].text}</span>`;
                    } else {
                        item.innerHTML = dan[i].text;
                    }
                    item.style.opacity = this.opacity;
                    item.style.color = this.number2Color(dan[i].color);
                    item.addEventListener('animationend', () => {
                        this.container.removeChild(item);
                    });

                    const itemWidth = this._measure(dan[i].text);
                    let tunnel;

                    // adjust
                    switch (dan[i].type) {
                        case 'right':
                            tunnel = getTunnel(item, dan[i].type, itemWidth);
                            if (tunnel >= 0) {
                                item.style.width = itemWidth + 1 + 'px';
                                item.style.top = itemHeight * tunnel + 'px';
                                //item.style.transform = `translateX(-${danWidth}px)`;
                            }
                            break;
                        case 'top':
                            tunnel = getTunnel(item, dan[i].type);
                            if (tunnel >= 0) {
                                item.style.top = itemHeight * tunnel + 'px';
                            }
                            break;
                        case 'bottom':
                            tunnel = getTunnel(item, dan[i].type);
                            if (tunnel >= 0) {
                                item.style.bottom = itemHeight * tunnel + 'px';
                            }
                            break;
                        default:
                            PlayEr.tips.msg(`Can't handled danMa type: ${dan[i].type}`);
                    }
                    if (tunnel >= 0) {
                        // move
                        item.classList.add('ec-danMa-move');
                        item.style.animationDuration = this._danAnimation(dan[i].type);
                        // insert
                        docFragment.appendChild(item);
                    }
                }
                this.container.appendChild(docFragment)
                return docFragment;
            }
        },
        "htmlEncode": function (str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
        },
        "hide": function () {
            this.showing = false;
            this.clear();
        },
        "show": function () {
            this.seek();
            this.showing = true;
        },
        "send": function (t){
            const data = {
                text: t.text,
                color: t.color,
                type: t.type,
                time: PlayEr.void.video.currentTime,
                player: PlayEr.danMu.dm_api[0][3],
            };
            this.apiBackend.send(data, function (data) {
                PlayEr.danMu.dan.splice(this.danIndex, 0, data);
                PlayEr.danMu.danIndex++;
                const dk = {
                    text: PlayEr.danMu.htmlEncode(data.text),
                    color: data.color,
                    type: data.type,
                    border: `2px solid #24a5ff`,
                };
                PlayEr.danMu.draw(dk);
                let t = $(".dm-input");
                t.val("")
                let interval = setInterval(function () {
                    let time = Number(t.data('time')) - 1;
                    t.data('time',time).attr('placeholder',time+lg['dm-dj']).attr('disabled',true);
                    if (time <= 0) {
                        t.data('time',ConFig['config']['danMu_interval']).attr('placeholder',lg['dm-input']).attr('disabled',false);
                        clearInterval(interval);
                    }
                }, 1000);
            });
        },
        "getFontSize" :function(fontSize) {
            const clamp = function (e, t, r) {
                return Math.max(Math.min(e, Math.max(t, r)), Math.min(t, r))
            };
            const clientWidth = document.getElementById("player").clientWidth;

            if (typeof fontSize === 'number') {
                return clamp(fontSize, 12, clientWidth);
            }

            if (typeof fontSize === 'string' && fontSize.endsWith('%')) {
                const ratio = parseFloat(fontSize) / 100;
                return clamp(clientWidth * ratio, 12, clientWidth);
            }
            return fontSize;
        },
        "set":function(i,k,v){
            v && PlayEr.cookie.Set('d_set'+i, [i,k,v],7);
            switch (i) {
                case 1:
                {
                    this.speedRate = k;
                    break;
                }
                case 2:
                {
                    let d_font = this.getFontSize(k);
                    $(".ec-danMa").css("font-size",d_font);
                    this.height = d_font+5;
                    break;
                }
                case 3:
                {
                    this.opacity = k;
                    break;
                }
                case 4:
                {
                    $(".ec-danMa").css("bottom",k);
                    break;
                }
                default:
                    break;
            }
        },
        "content": function () {
            //移动端弹幕输入框显示隐藏
            $(".dm-bnt").click(function(){
                let cont = $(".xgplayer-controls");
                cont.addClass("wap-controls");
                $(".player-list-off").addClass("dm-off").removeClass("off");
                $(".dm-off").click(function(){
                    cont.removeClass("wap-controls");
                    $(".player-list-off").removeClass("dm-off").addClass("off");
                });
            });
            let cc = $(".dm-box-cc"), dm_cc = PlayEr.cookie.Get('dm-box-cc'),
                dmP_1 = PlayEr.cookie.Get('content_dmP-1'), dmP_2 = PlayEr.cookie.Get('content_dmP-2'),
                cnt_1 = $(".content_dmP-1 .item"), cnt_2 = $(".content_dmP-2 .item"),
                u = function (a, b, c) {
                    if (a !== undefined || a !== '') {
                        b.eq(a).addClass("on-1").siblings().removeClass("on-1");
                    }
                    b.click(function () {
                        $(this).addClass("on-1").siblings().removeClass("on-1");
                        PlayEr.cookie.Set(c, $("." + c + " .item").index(this),7);
                    });
                };
            u(dmP_1, cnt_1, 'content_dmP-1');
            u(dmP_2, cnt_2, 'content_dmP-2');
            $(".dm-box-z").click(function () {
                $(".dm-set-box").removeClass("ec-show");
                $(".dm-style-box").toggleClass("ec-show");
            });

            //入库弹幕
            let get = function () {
                let color = $(".content_dmP-2 .on-1").data("color");
                let type = $(".content_dmP-1 .on-1").data("type");
                let text = $(".dm-input").val();
                if (PlayEr.empty(text)) {
                    PlayEr.tips.msg(lg['dm-please']);
                }else if(text.length > ConFig['config']['danMu_length']){
                    PlayEr.tips.msg(lg['dm-text']);
                } else {
                    PlayEr.danMu.send({
                        text: text,
                        color: color,
                        type: type,
                    });
                }
            }
            $(".dm-send").click(function(){
                get();
            });
            $(".dm-input").keydown(function (e) {
                if (e.keyCode === 13) {
                    get();
                }
            });
            if (dm_cc === '1') {
                PlayEr.danMu.hide();
                cc.html(PlayEr.svg["dm-no"]).data("id", '1');
            }
            cc.click(function () {
                if ($(this).data("id") === '1') {
                    PlayEr.danMu.show();
                    PlayEr.cookie.Del('dm-box-cc');
                    $(this).html(PlayEr.svg["dm-off"]).data("id", '0');
                } else {
                    PlayEr.danMu.hide();
                    PlayEr.cookie.Set('dm-box-cc', "1",7);
                    $(this).html(PlayEr.svg["dm-no"]).data("id", '1');
                }
            });

            let s_data = [
                [lg['dm-velocity'], lg['es'], lg['slower'], lg['moderate'], lg['faster'], lg['express']],
                [lg['dm-size'], lg['gtc'], lg['minuteness'], lg['less'], lg['moderate'], lg['more'], lg['maximum']],
                [lg['dm-opacity'], '100%', '75%', '50%', '25%', '0%'],
                [lg['dm-br'], '1/4', lg['one'], '3/4'],
            ],s_data_t = [
                ['','0.5', '0.8', '1', '1.5', '2'],
                ['',PlayEr.danMu.height,'1%', '2%', '3%', '4%', '5%'],
                ['','1', '0.75', '0.5', '0.25', '0'],
                ['','60%', '45%', '10%'],
            ];
            $(".set-toggle").append(PlayEr.svg.left);
            let s_all_html = '',d_index = null;
            for(let i = 0; i < s_data.length; i++){
                let s_i_html = '';
                for(let k = 0; k < s_data[i].length; k++){
                    if(k === 0){
                        s_i_html = s_i_html+'<div class="flex between br"><span class="dm-set-label flex"><i>'+PlayEr.svg.left+'</i>'+s_data[i][k]+'</span></div>';
                    }else{
                        s_i_html = s_i_html+'<div class="flex between dm-n2" data-time="'+s_data_t[i][k]+'"><span class="dm-set-label flex"><i></i>'+s_data[i][k]+'</span></div>';
                    }
                }
                s_all_html = s_all_html+'<div class="dm-set-list">'+s_i_html+'</div>';

                let ck =PlayEr.cookie.Get('d_set'+(i+1));
                if(ck){
                    let ck_data = ck.split(",");
                    PlayEr.danMu.set(Number(ck_data[0]),ck_data[1]);
                    $(".dm-set-box .dm-set-list").eq(0).children().eq(i).find("span").text(ck_data[2]);
                }
            }
            $(".dm-set-box").append(s_all_html);

            $(".dm-box-set").click(function(){
                $(".dm-style-box").removeClass("ec-show");
                $(".dm-set-box").toggleClass("ec-show");
            });
            $("#dm_n1 .between").click(function(){
                let c_i = $(this).data("id");
                $(".dm-set-box .dm-set-list").eq(c_i).addClass("ds-set-show").siblings().removeClass("ds-set-show");
                d_index = c_i;
            });
            $(".dm-set-box .br").click(function(){
                $(".dm-set-box .dm-set-list").eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
            });
            $(".dm-n2").click(function() {

                let d_i_k = $(this).text(),d_ccc_li = $(".dm-set-box .dm-set-list");
                d_ccc_li.eq(0).children().eq(d_index - 1).find("span").text(d_i_k);
                d_ccc_li.eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
                let d_time = $(this).data("time");

                if(d_i_k !== lg['gtc']){
                    PlayEr.danMu.set(d_index,d_time,d_i_k);
                }else{
                    PlayEr.cookie.Del('d_set2');
                }
            });
        }
    },
    "list":{
        "err" : 0,
        "Init":function(){
            let bnt = $(".list-bnt");
            if(PlayEr.empty(ConFig["MesData"]['api']) || PlayEr.empty(ConFig["MesData"]['id'])){bnt.remove();return;}
            //打开选集列表
            let n = $(".player-list"),t = $(".player-list-off");
            bnt.click(function(){
                t.show();
                if($(".new-title").length === 0){
                    n.addClass('ec-show');
                    PlayEr.list.load();

                    let list = sessionStorage.getItem("list");
                    if(PlayEr.empty(list)){
                        PlayEr.list.api();
                    }else{
                        PlayEr.list.getList(JSON.parse(list));
                        console.log("列表数据获取自本地存储");
                    }

                }else{
                    n.addClass('ec-show');
                }
            });
            $(t).click(function(){
                t.hide();
                n.removeClass('ec-show');
            });

            //列表内功能
            $(document).on('click', '.new-from span', function() {
                $(this).addClass("on").siblings().removeClass("on");
                let i = $(".new-from span").index(this),q = $(".new-url ul").eq(i);
                q.fadeIn(800).siblings().hide();
                q.addClass("dx").siblings().removeClass("dx");
            });
            $(document).on('click', "#dl", function() {
                let ac_id = $(".new-url");
                if (ac_id.hasClass("new-100") ) {
                    $(this).html(lg['single-row']);ac_id.removeClass("new-100");
                }else {
                    $(this).html(lg['many']);ac_id.addClass("new-100");
                }
            });
        },
        "load" : function(){
            let lod = '<div class="new-title"><h3 class="l-bj l-100"></h3><div class="l-bj l-100 l-h-2 l-t10"></div>\n' +
                '<div class="l-bj l-100 l-h-2 l-t10"></div></div><div class="new-bottom l-t30"><div class="on l-bj l-55 l-h-2"></div>\n' +
                '<div class="new-url"><ul class="flex dx"><li class="l-bj"></li><li class="l-bj"></li></ul></div></div>';
            $(".new-body").html(lod);
        },
        "api2":function(){
            if(PlayEr.empty(ConFig["MesData"]['api']) || PlayEr.empty(ConFig["MesData"]['id'])){return;}
            PlayEr.danMu.apiBackend.api(ConFig["MesData"]['api']+'/dp?id='+ConFig["MesData"]['id'], '', '', function (e,t) {
                if(t['copy'] !== '超级播放器苹果cms接口，作者QQ602524950' || t['code'] === '0'){return}
                //临时存储获取的选集信息
                sessionStorage.setItem("list",JSON.stringify(t));
            }, function () {
                ConFig["MesData"]["next"] = "";
            });
        },
        "api":function(){
            PlayEr.danMu.apiBackend.api(ConFig["MesData"]['api']+'/dp?id='+ConFig["MesData"]['id'], '', '', function (e,t) {
                if(t['copy'] !== '超级播放器苹果cms接口，作者QQ602524950' || t['code'] === '0'){return}
                //临时存储获取的选集信息
                sessionStorage.setItem("list",JSON.stringify(t));
                //插入html
                PlayEr.list.getList(t);
            }, function () {
                if(PlayEr.list.err >= 3){
                    $(".new-body").html('<div class="list-err">'+lg['error2']+'</p></div><div class="new-title"></div>');
                }else{
                    $(".new-body").html('<div class="list-err"><a class="list-retry t-bj" href="javascript:">'+lg['retry']+'</a><p>'+lg['error-tips']+'</p></div>');
                    PlayEr.list.err = (PlayEr.list.err+1);
                    $(".list-retry").click(function(){
                        PlayEr.list.load();
                        PlayEr.list.api();
                    });
                }
            });
        },
        "getList":function(t){
            //临时存储获取的选集信息
            sessionStorage.setItem("list",JSON.stringify(t));

            let form = '',url='';
            for(let i = 0;i < t['url'].length;i++){
                form = form+'<span data-count="'+t['url'][i]['count']+'" data-id="'+t['url'][i]['sid']+'">'+t['url'][i]['from']+'</span>';
                let urlData = t['url'][i]['url'],urlHtml = '';
                for(let i2 = 0;i2 < urlData.length;i2++){
                    urlHtml = urlHtml+'<li><a data-id="'+urlData[i2]['nid']+'" data-url="'+urlData[i2]['url']+'" href="javascript:">'+urlData[i2]['name']+'</a></li>';
                }
                url = url+'<ul class="flex">'+urlHtml+'</ul>';
            }
            let html = '<div class="new-title"><h3 title="'+t['name']+'">'+t['name']+'</h3>\n' +
                '<div class="new-title-feature"><span class="new-title-heat">🔥'+(t['hits'] === ''?lg['hits']:t['hits'])+'</span><span>'+(t['area'] === ''?'':t['area']+'·')+(t['year'] === ''?lg['year']:t['year'])+(t['class'] === ''?'':'·'+t['class'])+'</span></div>\n' +
                '<div class="new-title-update">'+(t['remarks'] === ''?lg['remarks']:t['remarks'])+'</div></div>\n' +
                '<div class="new-top"><h4 title="选集">'+lg['list']+'</h4><div class="function flex"><a id="dx" href="javascript:">'+lg['ps']+'</a><a id="dl" href="javascript:">'+lg['single-row']+'</a></div></div><div class="new-bottom"><div class="new-from flex">'+form+'</div><div class="new-url">'+url+'</div></div>';
            $(".new-body").html(html);

            //设置选集列表高度
            PlayEr.list.height();
            $(window).resize(function () {
                PlayEr.list.height();
            });

            $("#dx").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $(".dx").each(function () {
                        let playlist = $(this).find("li");
                        for (let i = 0, j = playlist.length - 1; i < j;) {
                            let l = playlist.eq(i).clone(true), r = playlist.eq(j).replaceWith(l);
                            playlist.eq(i).replaceWith(r);
                            ++i;
                            --j;
                        }
                    });
                });
            });

            PlayEr.list.set();
            //切换选集
            $(".new-url li").click(function(){
                $(this).addClass("d-on").siblings().removeClass("d-on");
                let data = $(this).children().data();
                window.location = "/player/index.php?code="+PlayEr.GetRequest()["code"]+"&url="+data['url']+'&sid='+$(".new-from .on").data("id")+'&nid='+data['id']+"&if=1";
            });
        },
        "set":function(){
            let sid = ConFig["MesData"]['sid'] ? (ConFig["MesData"]['sid']-1) : 0,nid = (ConFig["MesData"]['nid']-1);
            $(".new-from span").eq(sid).addClass("on").siblings().removeClass("on");
            $(".new-url ul").eq(sid).addClass("dx").siblings().removeClass("dx");
            $(".new-url .dx li").eq(nid).addClass("d-on").siblings().removeClass("d-on");
        },
        "height":function(){
            let h =  $(".player-list").height()-($(".new-title").height()+131);
            $('.new-url ul').css("height",h+"px");
        },
        "getNextUrl":function(){
            let data = ConFig["MesData"];
            window.location = "/player/index.php?code="+PlayEr.GetRequest()["code"]+
                "&url="+data['next']+
                '&sid='+(data['sid'])+
                '&nid='+(Number(data['nid'])+1)+"&if=1";
        },
        "next":function(){
            if(PlayEr.empty(ConFig["MesData"]["next"]) === false && ConFig["config"]['next_bnt'] === '1'){
                $(".xgplayer-controls").prepend('<div class="ec-next bnt-public"><div class="xgplayer-icon">'+PlayEr.svg.next+'</div></div>');
                $(".ec-next").click(function(){
                    if(PlayEr.empty(ConFig["MesData"]["next"]) === false){
                        PlayEr.list.getNextUrl();
                    }else{
                        PlayEr.tips.msg(lg['unusual']);
                    }
                });
            }
        },
        "autoNext":function(){
            if (ConFig['config']['next_auto'] === '0') {return}
            PlayEr.void.on('ended', function () {
                if(!PlayEr.empty(ConFig["MesData"]["next"])) {
                    box.prepend('<div class="pop-msg vague2 again"><div class="again-icon">'+PlayEr.svg.reb+'</div><div class="pop-content"><span id="count2">'+ConFig['config']['next_time']+'</span>'+lg['skip']+'</div></div>');
                    $(".pause-ad").remove();
                    PlayEr.countDown(function(){},'#count2');
                    let timer = setTimeout(function(){
                        PlayEr.list.getNextUrl();
                    },(ConFig['config']['next_time']*1000));

                    $(".again").click(function(){
                        clearTimeout(timer);
                        $(".again").remove();
                        PlayEr.void.play();
                    });

                    PlayEr.void.on('play', function () {
                        clearTimeout(timer);
                        $(".again").remove();
                    });
                }
            });
        }
    },
    "broadside":function(){
        let obj = $(".broadside");
        if(ConFig["config"]['lock'] === '1'){
            obj.append('<div class="ec-lock" data-id="1">'+PlayEr.svg.open+'</div>');
            let h = $('.ec-lock');
            h.click(function(){
                if(Number(h.data('id')) === 1){
                    h.html(PlayEr.svg.lock).data('id','2');
                    box.addClass("lock-hide");
                }else{
                    h.html(PlayEr.svg.open).data('id','1');
                    box.removeClass("lock-hide");
                }
            });
        }
        if(ConFig["config"]['revolve'] === '1'){
            obj.append('<div class="ec-change">'+PlayEr.svg.change+'</div>');
            let t = 0,r=$("video");
            $('.ec-change').click(function(){
                switch (t) {
                    case 0:
                        r.addClass("along1");++t;
                        break;
                    case 1:
                        r.removeClass("along1");++t;
                        r.addClass("along2");
                        break
                    case 2:
                        r.removeClass("along2");++t;
                        r.addClass("along3");
                        break;
                    case 3:
                        r.removeClass("along3");t = 0;
                        break;
                }
            });
        }
        if(ConFig["config"]['pip'] === '1'){
            obj.append('<div class="ec-pip" data-id="1">'+PlayEr.svg.pip+'</div>');
            let video = $("video")[0];
            //$("video").attr("autopictureinpicture",true);
            $(".ec-pip").click(async () => {
                try {
                    if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
                        if (document.pictureInPictureElement) {
                            await document.exitPictureInPicture();
                        } else {
                            await video.requestPictureInPicture();
                        }
                    }else if(video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function"){
                        video.webkitSetPresentationMode(video.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");
                    }else{
                        $(".ec-pip").hide();
                    }
                } catch (err) {
                    $(".ec-pip").hide();
                    throw err;
                }
            });
        }
    },
    "tas":function(){
        if(PlayEr.group(ConFig['config']['try-user']) !== -1){
            PlayEr.void.on('play', function () {
                setTimeout(function(){
                    PlayEr.void.seek(0);
                    PlayEr.void.pause();
                    PlayEr.tips.msg(lg['try']);
                }, ConFig['config']['try-time']*1000);
            });
        }
    },
    "LoadAnimation":function(){
        let a = Number(PlayEr.cookie.Get("time_" + ConFig['id2'],ConFig['config']['rm'])),b = PlayEr.secondToTime(a),wait = ConFig['config']['wait_time'];
        if(wait === '0'){
            if (b !== '00:00' && b !== 'NaN:NaN') {
                $(".ec-remember").html('<i class="art-icon art-icon-close s-on">'+PlayEr.svg.close+'</i>'+lg['rm1']+'<em>'+b+'</em><span class="t-color">'+lg['rm2']+'</span>').show();
                $(".ec-remember span").click(function(){
                    $(".ec-remember").html("<p></p>").hide();
                    PlayEr.void.video.currentTime = a;
                });
                PlayEr.void.on('play', function () {
                    let timer = setTimeout(function () {
                        $(".ec-remember").html("<p></p>").hide();
                        clearTimeout(timer);
                    }, 3000);
                });
            }
        }else{
            box.before('<div id="loading" class="w-h"><div class="ec-loading"><div class="w-h"><div class="bj bj-1" style="background-image: url('+ConFig['config']['gx']['pic']+');"></div><div class="loading-icon"></div></div><div class="button" style="color:'+ConFig['config']['wait_color']+'"><div class="wait1">\n' +
                '<span id="link1">'+lg['rm8']+'</span><span id="link1-success">【'+lg['rm6']+'】</span></div><span class="wait2" id="link3"><i id="link3_tip">'+lg['rm9']+'</i><i id="link3-error">【'+lg['rm7']+'】</i></span><div class="wait3"></div></div></div></div>');
            setTimeout(function() {
                $("#link1").fadeIn();
            }, 100);
            setTimeout(function() {
                $("#link1-success").fadeIn();
            }, 500);
            setTimeout(function() {
                $("#link3").fadeIn();
            }, 1000);
            PlayEr.void.on('error', function () {
                $("#link3-error").show();
            });
            PlayEr.void.once('canplay', function () {
                $("#link3").text(lg['rm5']);
                setTimeout(function() {
                    PlayEr.void.pause();
                    if (b !== '00:00' && b !== 'NaN:NaN') {
                        $('.wait3').html(lg['rm1']+''+b+'，'+lg['rm2']+'？<a class="ec-ok">'+lg['yes']+'</a><i id="count">'+wait+'</i>s<a class="ec-no">'+lg['no']+'</a>');
                    }else{
                        $("#link3").html('<i id="count">'+wait+'</i>'+lg['rm4']+'<a class="ec-no">'+lg['yes']+'</a>');
                    }
                    PlayEr.countDown(function(){},'#count');
                    let time = setTimeout(function() {
                        $("#loading").hide();
                        PlayEr.void.play();
                    }, (wait*1000));

                    $(".ec-ok").click(function(){
                        clearTimeout(time)
                        $("#loading").hide();
                        PlayEr.void.play();
                        PlayEr.void.video.currentTime=a;
                    });
                    $(".ec-no").click(function(){
                        clearTimeout(time)
                        $("#loading").hide();
                        PlayEr.void.play();
                    });
                }, 1500);
            });
        }
    },
    "autoOrientation":async function(state){
        const player = document.querySelector("#player"),lastOrientation = screen.orientation.type;
        if (state) {
            const { videoWidth, videoHeight } = document.querySelector("video"),
                { clientWidth: viewWidth, clientHeight: viewHeight } = document.documentElement;
            if (
                (videoWidth > videoHeight && viewWidth < viewHeight) ||
                (videoWidth < videoHeight && viewWidth > viewHeight)
            ){
                const oppositeOrientation = lastOrientation.startsWith('portrait') ? 'landscape' : 'portrait';
                await screen.orientation.lock(oppositeOrientation);
                player.classList.add('ec-auto-orientation-fullscreen');
            }
        } else {
            if (player.classList.contains('ec-auto-orientation-fullscreen')) {
                await screen.orientation.lock(lastOrientation);
                player.classList.remove('ec-auto-orientation-fullscreen');
            }
        }
    }
};
$(function(){
    if(PlayEr.GetRequest()['if'] === "1"){
        PlayEr.mes('');
    }else{
        $("#player").html('<div class="dddd w-h"><div class="bg"></div><div class="main"><div class="loading"></div><div class="tips">Waiting parameters</div></div></div>');
        window.addEventListener('message', function (e) {
            PlayEr.mes(e.data);
        });
    }
    if ((navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0)) {
        alert("兼容模式 易产生播放问题，请将浏览器设置为 极速模式！");
    }
});