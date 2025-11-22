# Apuntes: Flujo de trabajo con Git (con ramas)

Este archivo resume el flujo recomendado para trabajar con ramas en Git y mantener tus proyectos organizados.

---

## 1. Crear una nueva rama

Antes de hacer cambios:

```bash
git checkout -b nombre-de-la-rama
```

Ejemplos:

* `git checkout -b agregar-practica-arrays`
* `git checkout -b fix-estilos`
* `git checkout -b nuevo-proyecto-dom`

---

## 2. Hacer cambios en tus archivos

Edita, agrega o elimina archivos del proyecto.

---

## 3. Agregar cambios al staging

```bash
git add .
```

O para un archivo específico:

```bash
git add ruta/al/archivo
```

---

## 4. Hacer un commit

```bash
git commit -m "descripcion clara del cambio"
```

Ejemplos:

* "agrego practica de arrays"
* "corrijo estilos del navbar"
* "añado proyecto API fetch"

---

## 5. Enviar la rama a GitHub (push)

```bash
git push -u origin nombre-de-la-rama
```

---

## 6. Crear Pull Request en GitHub

1. Ir al repositorio en GitHub
2. Hacer clic en **"Compare & Pull Request"**
3. Agregar descripción
4. Crear el PR

---

## 7. Fusionar la rama a `main`

En GitHub:

* Revisar cambios
* Hacer clic en **Merge Pull Request**

---

## 8. Actualizar tu rama `main` local

```bash
git checkout main
git pull
```

---

## 9. Eliminar la rama (opcional)

En local:

```bash
git branch -d nombre-de-la-rama
```

En GitHub: eliminar desde el PR.

---

## Actualizar tu rama con los cambios de main (proyectos colaborativos)

Es importante mantener tu rama actualizada para evitar conflictos y trabajar siempre con la última versión del proyecto.

### 1. Cambiar a la rama principal

```bash
git checkout main
```

### 2. Traer los cambios más nuevos desde GitHub

```bash
git pull
```

### 3. Volver a tu rama de trabajo

```bash
git checkout nombre-de-la-rama
```

### 4. Actualizar tu rama con los cambios de `main`

#### Opción A (recomendada): Merge

```bash
git merge main
```

#### Opción B (avanzada): Rebase

```bash
git rebase main
```

### Flujo completo recomendado

```bash
git checkout main
git pull
git checkout nombre-de-la-rama
git merge main
```

---

## Resumen rápido

### Actualizar tu rama en proyectos colaborativos

1. Guardar cambios (commit o stash):

   * `git add .` y `git commit -m "WIP"`
   * **o** `git stash`
2. `git checkout main`
3. `git pull`
4. `git checkout nombre-de-tu-rama`
5. `git merge main`
6. Si usaste stash: `git stash pop`

## Subir cambios

1. `git checkout -b rama`
2. (Hacer cambios)
3. `git add .`
4. `git commit -m "mensaje"`
5. `git push -u origin rama`
6. PR en GitHub
7. Merge
8. `git checkout main`
9. `git pull`
10. (Opcional) borrar rama 
    `git checkout main` ->
    `git branch -d nombre-de-la-rama` ->
    `git push origin --delete nombre-de-la-rama`
