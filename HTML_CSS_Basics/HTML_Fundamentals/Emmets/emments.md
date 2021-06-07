# Emmets Excercise

### Write the one-line Emmet commands to produce the following HTML

```HTML
<h1></h1>
```
_Represented in Emmets_ = **h1 + Tab**

```html
<div>
    <p>
        <section>
            <h1>Nice!</h1>
        </section>
    </p>
</div>
```
_Represented in Emmets_ = **div>p>section>h1**


```html
<ul>outside
    <li>inside</li>
    <li>inside</li>
    <li>inside</li>
    <li>inside</li>
</ul>
```
_Represented in Emmets_ = **ul>li*4**

```html
<p>sibling 1</p>
<div>sibling 2</div>
<p>parent
    <div>child
        <div>grandchild</div>
    </div>
</p>
```
_Represented in Emmets_ = **p+div+p>div>div**