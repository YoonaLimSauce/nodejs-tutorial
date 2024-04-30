<table border=1>
    <?php for($i = 1; $i < 10; ++$i) {?>
        <tr>
            <?php for($j = 1; $j < 10; ++$j) {?>
                <td>
                    <?php echo $i . '*' . $j . '=' . $i * $j; ?>
                </td>
            <?php }?>
        </tr>
    <?php }?>
</table>