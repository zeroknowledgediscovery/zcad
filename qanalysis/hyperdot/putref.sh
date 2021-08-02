HREF='.\/'
cp ../*[0-9].dot .

for i in `ls *dot`
do
    sed -i "s/\(label=\"\(ptsd[0-9]*\)\",\)/\1href=\"${HREF}\/\2\.svg\",/g" $i
done
for i in `ls *dot`
do
    sed -i "s/dpi=200/dpi=60/g" $i
done
for i in `ls *dot`; do dot -Tsvg $i -o ${i/dot/svg}; done
