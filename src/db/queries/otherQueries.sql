SELECT 
    orders.order_id, 
    items.item_id, 
    items.unit_price, 
    orders_items.quantity,  
    orders.total_price, 
    orders_items.quantity * items.unit_price
FROM orders JOIN orders_items USING (order_id) 
JOIN items USING (item_id)
WHERE orders_items.order_id = orders.order_id
ORDER BY orders.order_id
LIMIT 10;


WITH cte_aaa AS (
        SELECT 
            orders_items.order_id AS order_id, 
            (orders_items.quantity * items.unit_price) AS product
        FROM orders JOIN orders_items USING (order_id) 
        JOIN items USING (item_id)
    )
UPDATE orders
    SET total_price = (
        SELECT SUM(cte_aaa.product) as product_sum
        FROM cte_aaa
        WHERE orders.order_id = cte_aaa.order_id
    )
FROM cte_aaa
WHERE orders.order_id = cte_aaa.order_id;