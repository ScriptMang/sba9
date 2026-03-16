# Reflection

This project required to me create multiple components  and embed some into the other.
Creating the components for taskform, tasklist, taskitem and Dashboard was straight forward.
I'd say the hardest part was getting the task filter component. The use of conditional props led to a lot of typos and confusion about the use parenthese to return objects vs regular arrow funcs for callbacks. Every time I change the dropped 
down to another to different status or priority the task list wouldn't reset.  It was not 
until much later I realized to create a second state variable to keep track of changes to task list given
filter labels. I didn't realize while whats changing is the same, the context is different. A smaller challenge I found is with options in typescript not using the question to unwrap value can result in values be returned as null instead of undefined. This also helped alot with the task filter. Once I did that I had to fix a bug of the task list after filter
using the only the initial list and not the updated one when adding or deleting tasks.
