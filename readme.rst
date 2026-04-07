Webrel: A Visual Relational Algebra Interpreter
===============================================

.. image:: https://img.shields.io/badge/Language-Javascript-yellow.svg
    :target: https://developer.mozilla.org/en-US/docs/Web/JavaScript

.. image:: https://img.shields.io/badge/Platform-Web\_Browser-lightgrey.svg

**Webrel** is an educational, web-based integrated development environment (IDE) and interpreter for **Relational Algebra**. It specifically follows the notation and theory established by **C.J. Date** and is designed to help students visualize database operations.

Originally developed as a portable tool, it is now hosted on `Launchpad <https://launchpad.net/webrel/>`_ .

Key Features
------------

* **Zero Installation**: Built entirely with **XHTML** and **JavaScript**, it runs in any standard web browser without additional software
* **LALR Parsing**: Utilizes a robust **LALR** parser for high flexibility and standard compliance.
* **Visual Debugging Mode**: A unique "Debug" feature shows the step-by-step execution of internal operations as separate tables.
* **Simplified Syntax**: While maintaining compatibility with relational standards, the grammar is optimized for educational clarity based on reference textbooks.
* **Built-in Datasets**: Includes common educational databases (like Suppliers and Parts) to allow immediate testing.

Supported Operations
--------------------
The interpreter supports a core subset of relational algebra commands:

* **Selection** (`WHERE`)
* **Projection** (`{...}`)
* **Join** (`JOIN`) and **Divide** (`DIVIDEBY`)
* **Set Operations**: `UNION`, `INTERSECT`, `MINUS`, and `TIMES`
* **Specialized Operators**: `RENAME`, `EXTEND`, `SUMMARIZE`, `SEMIJOIN`, and `SEMIMINUS`
* **Data Updates**: `INSERT`, `DELETE`, and `UPDATE` commands

Technical Architecture
----------------------
The interpreter follows a standard compiler pipeline implemented in JavaScript:

#. **Lexical Analyzer**: A custom scanner using a state-machine (switch-case) approach to tokenize input.
#. **Syntactic Analyzer**: An LALR parser that manages a state stack and an execution machine.
#. **Execution Engine**: Maps each grammar reduction to a specific function that performs the relational logic.
#. **UI Engine**: An object-oriented table renderer (`ColoredTable`) that handles the visual display of relations.

Getting Started
---------------
#.  Open https://yoosofan.github.io/webrel/ on any web browser (new or old even IE6).
#.  Type your query in the text area and click **Run**.

Sample Queries
-------------------
#. Find the names of suppliers
    .. code:: sql

      s{sname};

#. Find the names and cities of parts
    .. code:: sql

      p{pname, city};

#. Find the cities of parts and suppliers
    .. code:: sql

      p{city} union s{city}

#. Find the renamed sn as s_num of sp

    .. code:: sql

        sp rename (sn as s_num ,pn as p_num);

#. Find the renamed sn as s_num and pn as p_num of sp

    .. code:: sql

      sp rename (sn as s_num ,pn as p_num);

.. code:: sql

  p{pn, pname} times s{sn, sname};

.. code:: sql

  ((p rename CITY as pcity) times s) where CITY = pcity;

.. code:: sql

  (((s rename sn as sa){sa,city} join (s rename sn as sb){sb,city})where sa<sb){sa,sb};

.. code:: sql

  ((s{sn} minus (sp where pn="P2"){sn}) join s){sname};

.. code:: sql

  ((sp join s) where pn="P2"){sname};

.. code:: sql

  ((sp where pn="P2") join s){sname};

.. code:: sql

  (s join (sp where pn="P2")){CITY,SNAME,sn,STATUS,pn};

.. code:: sql

  (s times (j rename city as jcity))where city=jcity;

.. code:: sql

  (((s times (j rename city as jcity))where city <> jcity){sn,jn})join spj{jn};

.. code:: sql

  ((s join j){sn,jn} join spj){pn};

.. code:: sql

  (spj join (s where city="London"){sn}){pn} join p;

.. code:: sql

  (p where WEIGHT>12){PNAME}union ((((sp join p)join s) where STATUS>20)join p){PNAME};

.. code:: sql

  a:=RELATION {TUPLE{pn pn ("p1")}};

.. code:: sql

  b:=RELATION {TUPLE{pn p ("p1")}};

.. code:: sql

  a union b;

.. code:: sql

  delete s where city="London";

.. code:: sql

  s;

.. code:: sql

  p1:=relation{tuple{pname("Oscar"),color("blue")}};

.. code:: sql

  p1 join p{pname,color};

.. code:: sql

  p2:=relation{tuple{color("green"),pname("pn")}};

.. code:: sql

  p1 union p2;

.. code:: sql

  p8:=relation{tuple{pname("pn1"),color("blue")},
    tuple{pname("pn2")},
    tuple{pn("p10"),color("red")}};

  p8;

.. code:: sql

  (spj where qty<>200){qty};

.. code:: sql

  p where city="london";

.. code:: sql

  with (s rename sn as sa){sa,city} as t1,
    (s rename sn as sb){sb,city} as t2,
    t1 join t2 as t3,
    t3 where sa<sb as t4:
    t4{sa,sb};

.. code:: sql

  with s{sn} as t1,
    sp where pn="P1" as t2,
    t2 {sn} as t3,
    t1 minus t3 as t4,
    t4 join s as t5,
    t5{sname} as t6:
    t6;

.. code:: sql

  s semijoin (sp where pn="P2");

.. code:: sql

  s semiminus (sp where pn="P2");

.. code:: sql

  s{sn} divideby (sp where sn="s2"){pn} per sp{sn,pn};

.. code:: sql

  ((s{sn} divideby p{pn} per sp{sn,pn})join s){sname};

.. code:: sql

  extend p add weight * 10 as gmwt;

.. code:: sql

  (extend p add weight * 10 as GMWT) where COLOR="Red" ;

.. code:: sql

  extend s add "suplier" as tag;

.. code:: sql

  extend s add ("suplier" as tag , status*5 as jh);

.. code:: sql

  extend (p join sp) add weight* 10 as shi;

.. code:: sql

  (extend s add city as ccity){All but city};

.. code:: sql

  extend s add count ((sp rename sn as x) )as np;

.. code:: sql

  summarize sp per p{pn} add sum (QTY) as tq;

.. code:: sql

  summarize (p join sp) per p{city} add sum(qty) as nsp;

.. code:: sql

  summarize sp per s{sn} add count as np;

.. code:: sql

  summarize sp per p{pn} add(sum(qty) as tq1,avg(qty) as tq2);

.. code:: sql

  summarize s per s{city} add avg (status) as avg_status;

.. code:: sql

  s{sn} divideby (p where color="Red"){pn} per sp{sn,pn};

.. code:: sql

  ((s{sn} divideby p{pn} per sp{sn,pn})join s){sname};

Authors
-------
* **Ahmad Yoosofan**
* **Sara Izadi**

Reference
---------
`Yoosofan, A., & Izadi, S. (2010). Construction of a Language Interpreter and Integrated Development Environment for Book-Notation Relational Algebra. 1st Regional Conference on Research in Electrical Technology, IAUN.
<https://yoosofan.github.io/files/yoosofan_bibliography/conference/13890930.Relational_Algebra_interpreter.NajafAbad.pdf>`_

